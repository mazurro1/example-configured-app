import { queryClient } from "@constants/queryClient";
import { env } from "@env";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";

const QueryWrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {env.NEXT_PUBLIC_APP_ENV === "dev" && <ReactQueryDevtools />}
  </QueryClientProvider>
);
export default QueryWrapper;
