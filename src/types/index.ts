
export interface Task {
    id: number;
    title: string;
    description: string;
    column: "backlog" | "in-progress" | "review" | "done";
}

export type TasksByColumn = {
    [key in Task['column']]: Task[];
};
