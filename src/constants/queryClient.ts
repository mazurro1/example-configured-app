import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: () => {
        toast.error("Failed on fetch");
      },
      staleTime: 600000, // 10min
      cacheTime: 900000, // 15min
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
    mutations: {
      onError: () => {
        toast.error("Failed on fetch");
      },
    },
  },
});
