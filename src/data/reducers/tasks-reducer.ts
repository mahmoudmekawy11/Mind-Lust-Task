import type { Task, TasksByColumn } from "@/types";
import { groupTasksByColumn } from "@/utils/task.utils";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PaginationInfo {
    page: number;
    limit: number;
    isLoading: boolean;
    hasMoreItems: boolean;
}


interface ITaskManagementState {
    allTasks: TasksByColumn; // All tasks fetched from the server
    visibleTasks: TasksByColumn; // Currently visible tasks (initially 8, then +4 on scroll)
    pagination: {
        [key in Task['column']]: PaginationInfo;
    };
    editingTask: Task | null;
    isLoading: boolean;
    searchTerm: string;
}

const INITIAL_TASKS_LIMIT = 6;
const LOAD_MORE_TASKS_LIMIT = 4;

const initialState: ITaskManagementState = {
    allTasks: {} as TasksByColumn,
    visibleTasks: {} as TasksByColumn,
    pagination: {
        backlog: { page: 1, limit: INITIAL_TASKS_LIMIT, isLoading: false, hasMoreItems: false },
        "in-progress": { page: 1, limit: INITIAL_TASKS_LIMIT, isLoading: false, hasMoreItems: false },
        review: { page: 1, limit: INITIAL_TASKS_LIMIT, isLoading: false, hasMoreItems: false },
        done: { page: 1, limit: INITIAL_TASKS_LIMIT, isLoading: false, hasMoreItems: false },
    },
    editingTask: null,
    isLoading: false,
    searchTerm: "",
};

export const tasksManagementSlice = createSlice({
    name: "tasksManagementSlice",
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            const groupedTasks = groupTasksByColumn(action.payload);
            
            // Store all tasks
            state.allTasks = groupedTasks;
            
            // Initialize visible tasks with first 8 tasks per column
            const requiredColumns: (keyof TasksByColumn)[] = ["backlog", "in-progress", "review", "done"];
            const visibleTasks: TasksByColumn = requiredColumns.reduce((acc, column) => {
                const columnTasks = groupedTasks[column] || [];
                acc[column] = columnTasks.slice(0, INITIAL_TASKS_LIMIT);
                
                // Update pagination info
                state.pagination[column] = {
                    page: 1,
                    limit: INITIAL_TASKS_LIMIT,
                    isLoading: false,
                    hasMoreItems: columnTasks.length > INITIAL_TASKS_LIMIT,
                };
                
                return acc;
            }, {} as TasksByColumn);
            
            state.visibleTasks = visibleTasks;
        },
        loadMoreTasksForColumn: (state, action: PayloadAction<Task['column']>) => {
            const column = action.payload;
            const currentVisibleCount = state.visibleTasks[column]?.length || 0;
            const allColumnTasks = state.allTasks[column] || [];
            
            // Calculate next batch of tasks
            const nextTasks = allColumnTasks.slice(
                currentVisibleCount, 
                currentVisibleCount + LOAD_MORE_TASKS_LIMIT
            );
            
            // Append new tasks to visible tasks
            if (nextTasks.length > 0) {
                state.visibleTasks[column] = [
                    ...(state.visibleTasks[column] || []),
                    ...nextTasks
                ];
            }
            
            // Update pagination
            const newVisibleCount = state.visibleTasks[column].length;
            state.pagination[column] = {
                ...state.pagination[column],
                page: state.pagination[column].page + 1,
                isLoading: false,
                hasMoreItems: newVisibleCount < allColumnTasks.length,
            };
        },
        setColumnLoading: (state, action: PayloadAction<{ column: Task['column']; isLoading: boolean }>) => {
            const { column, isLoading } = action.payload;
            state.pagination[column].isLoading = isLoading;
        },
        setPaginatedTasks: (state, action: PayloadAction<{
            tasks: Task[];
            pagination: PaginationInfo;
            column: Task['column'];
            append?: boolean;
            searchTerm?: string;
        }>) => {
            const { tasks, pagination, column, append = false, searchTerm } = action.payload;
            if (append) {
                // Append new tasks (for infinite scrolling)
                state.visibleTasks = {
                    ...state.visibleTasks,
                    [column]: [...(state.visibleTasks[column] || []), ...tasks]
                };
            } else {
                // Replace tasks (for new search or reset)
                state.visibleTasks = groupTasksByColumn(tasks);
            }
            state.pagination = {
                ...state.pagination,
                [column]: pagination,
            };

            if (typeof searchTerm === "string") {
                state.searchTerm = searchTerm;
            }
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
            // Generate a unique ID based on timestamp and random number
            const newId = Date.now() + Math.floor(Math.random() * 1000);
            const newTask: Task = {
                ...action.payload,
                id: newId,
            };
            // Ensure the column array exists before adding
            if (!state.visibleTasks[newTask.column]) {
                state.visibleTasks[newTask.column] = [];
            }
            if (!state.allTasks[newTask.column]) {
                state.allTasks[newTask.column] = [];
            }
            
            // Add to both visible and all tasks
            state.visibleTasks[newTask.column] = [newTask, ...state.visibleTasks[newTask.column]];
            state.allTasks[newTask.column] = [newTask, ...state.allTasks[newTask.column]];
            
            // Update pagination
            state.pagination[newTask.column].hasMoreItems = 
                state.allTasks[newTask.column].length > state.visibleTasks[newTask.column].length;
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const updatedTask = action.payload;
            
            // Update in visibleTasks
            const originalColumn = Object.keys(state.visibleTasks).find(column =>
                state.visibleTasks[column as Task['column']].some((task: Task) => task.id === updatedTask.id)
            );
            
            if (originalColumn && originalColumn !== updatedTask.column) {
                // Remove from old column
                state.visibleTasks[originalColumn as keyof TasksByColumn] = state.visibleTasks[originalColumn as keyof TasksByColumn].filter((task: Task) => task.id !== updatedTask.id);
                state.allTasks[originalColumn as keyof TasksByColumn] = state.allTasks[originalColumn as keyof TasksByColumn].filter((task: Task) => task.id !== updatedTask.id);
                
                // Add to new column
                state.visibleTasks[updatedTask.column as keyof TasksByColumn] = [
                    updatedTask,
                    ...state.visibleTasks[updatedTask.column as keyof TasksByColumn],
                ];
                state.allTasks[updatedTask.column as keyof TasksByColumn] = [
                    updatedTask,
                    ...state.allTasks[updatedTask.column as keyof TasksByColumn],
                ];
            } else if (originalColumn) {
                // Just update in place if column didn't change
                state.visibleTasks[originalColumn as keyof TasksByColumn] = state.visibleTasks[originalColumn as keyof TasksByColumn].map((task: Task) =>
                    task.id === updatedTask.id ? updatedTask : task
                );
                state.allTasks[originalColumn as keyof TasksByColumn] = state.allTasks[originalColumn as keyof TasksByColumn].map((task: Task) =>
                    task.id === updatedTask.id ? updatedTask : task
                );
            } else {
                // If not found, add to the new column
                state.visibleTasks[updatedTask.column as keyof TasksByColumn] = [
                    updatedTask,
                    ...state.visibleTasks[updatedTask.column as keyof TasksByColumn],
                ];
                state.allTasks[updatedTask.column as keyof TasksByColumn] = [
                    updatedTask,
                    ...state.allTasks[updatedTask.column as keyof TasksByColumn],
                ];
            }
            
            // Update pagination
            state.pagination[updatedTask.column].hasMoreItems = 
                state.allTasks[updatedTask.column].length > state.visibleTasks[updatedTask.column].length;
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            const taskIdToDelete = action.payload;
            for (const column in state.visibleTasks) {
                state.visibleTasks[column as Task['column']] = state.visibleTasks[column as Task['column']].filter((task: Task) => task.id !== taskIdToDelete);
                state.allTasks[column as Task['column']] = state.allTasks[column as Task['column']].filter((task: Task) => task.id !== taskIdToDelete);
                
                // Update pagination
                state.pagination[column as Task['column']].hasMoreItems = 
                    state.allTasks[column as Task['column']].length > state.visibleTasks[column as Task['column']].length;
            }
        },
        moveTask: (state, action: PayloadAction<{
            taskId: number;
            sourceColumn: Task['column'];
            destinationColumn: Task['column'];
            destinationIndex: number;
        }>) => {
            const { taskId, sourceColumn, destinationColumn, destinationIndex } = action.payload;
            
            // Find and remove task from source column in visibleTasks
            const taskIndex = state.visibleTasks[sourceColumn].findIndex((task: Task) => task.id === taskId);
            if (taskIndex === -1) return;
            
            const [movedTask] = state.visibleTasks[sourceColumn].splice(taskIndex, 1);
            
            // Also update in allTasks
            const allTaskIndex = state.allTasks[sourceColumn].findIndex((task: Task) => task.id === taskId);
            if (allTaskIndex !== -1) {
                state.allTasks[sourceColumn].splice(allTaskIndex, 1);
            }
            
            // Update task's column
            movedTask.column = destinationColumn;
            
            // Insert task into destination column at the specified index
            state.visibleTasks[destinationColumn].splice(destinationIndex, 0, movedTask);
            state.allTasks[destinationColumn].push(movedTask);
            
            // Update pagination for both columns
            state.pagination[sourceColumn].hasMoreItems = 
                state.allTasks[sourceColumn].length > state.visibleTasks[sourceColumn].length;
            state.pagination[destinationColumn].hasMoreItems = 
                state.allTasks[destinationColumn].length > state.visibleTasks[destinationColumn].length;
        },
        reorderTasksInColumn: (state, action: PayloadAction<{
            column: Task['column'];
            sourceIndex: number;
            destinationIndex: number;
        }>) => {
            const { column, sourceIndex, destinationIndex } = action.payload;
            
            const columnTasks = state.visibleTasks[column];
            const [movedTask] = columnTasks.splice(sourceIndex, 1);
            columnTasks.splice(destinationIndex, 0, movedTask);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
       
    },
});

export const {
    setTasks,
    setPaginatedTasks,
    loadMoreTasksForColumn,
    setColumnLoading,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    reorderTasksInColumn,
    setLoading,
    setSearchTerm,
} = tasksManagementSlice.actions;
