import { QueryClient } from "@tanstack/react-query";

// Create a query client with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Prevent background refetches that could cause loops
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // Retry configuration
      retry: 0, // Retry failed queries up to 2 times
    },
    mutations: {
      // Set reasonable retry for mutations
      retry: 0,
    },
  },
});
