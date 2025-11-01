import { getAllTasks } from "@/services/task-api.services";
import { useQuery } from "@tanstack/react-query";

export const useTasksManagement = () => {
    return useQuery({
        queryKey: ["all-tasks"],
        queryFn: () => getAllTasks(),

    });
};