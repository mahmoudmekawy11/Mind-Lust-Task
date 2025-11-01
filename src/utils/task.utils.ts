import type { Task, TasksByColumn } from "@/types";
/**
 *  Groups tasks by their column status.
 * @param tasks  Array of Task objects to be grouped.
 * @returns  An object where each key is a column status and the value is an array of tasks in that column.
 */

export const groupTasksByColumn = (tasks: Task[]): TasksByColumn => {
    return tasks.reduce((acc, task) => {
        if (!acc[task.column]) {
            acc[task.column] = [];
        }
        acc[task.column].push(task);
        return acc;
    }, {} as TasksByColumn);
};