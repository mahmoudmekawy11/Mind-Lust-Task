import { AppAxios } from "@/lib/axios.config";
import type { Task } from "@/types";


// Simulate network delay
const simulateNetworkDelay = (ms: number = 1000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Fetch all tasks
export const getAllTasks = async (): Promise<Task[]> => {
    try {
        await simulateNetworkDelay();
        const data = AppAxios.instance.get<Task[]>('/tasks');
        return data.then(res => res.data);

    } catch (error) {
        console.error(error);
        return [];
    }
};
// export const getPaginatedTasks = async (page: number, limit: number, searchTerm?: string): Promise<{ tasks: Task[]; hasMore: boolean }> => {
//     await simulateNetworkDelay();
// };