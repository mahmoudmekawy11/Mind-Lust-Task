import type { Task, TasksByColumn } from "@/types";
import type { RootState } from "../types";

export const allTasksSelector = (state: RootState) => state.tasksManagementSlice.allTasks;
export const visibleTasksSelector = (state: RootState) => state.tasksManagementSlice.visibleTasks;
export const paginationSelector = (state: RootState) => state.tasksManagementSlice.pagination;

export const isLoadingColumnsTasksSelector = (state: RootState) => state.tasksManagementSlice.isLoading;
export const searchTermSelector = (state: RootState) => state.tasksManagementSlice.searchTerm;

export const filteredTasksSelector = (state: RootState) => {
    const tasks = state.tasksManagementSlice.visibleTasks;
    const searchTerm = state.tasksManagementSlice.searchTerm.toLowerCase().trim();

    if (!searchTerm) {
        return tasks;
    }

    const filteredTasks: TasksByColumn = {} as TasksByColumn;

    for (const [column, columnTasks] of Object.entries(tasks)) {
        filteredTasks[column as Task['column']] = columnTasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm)
        );
    }

    return filteredTasks;
};