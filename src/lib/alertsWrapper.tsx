import "react-toastify/dist/ReactToastify.css";

import { queryClient } from "@constants/queryClient";
import { useTranslation } from "@hooks/useTranslations";
import type { AxiosError } from "axios";
import type { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

// import styled from "styled-components";
import { usePageColorMode } from "@/hooks/usePageColorMode";
// const StyledContainer = styled(ToastContainer)`
//   &&&.Toastify__toast-container {
//   }
//   .Toastify__toast {
//   }
//   .Toastify__toast-body {
//   }
//   .Toastify__progress-bar {
//   }
// `;

const Alerts = ({ children }: PropsWithChildren) => {
  const { darkMode } = usePageColorMode();
  const logger = queryClient.getLogger();

  const { tString } = useTranslation("errors");

  logger.error = err => {
    const _err = err as AxiosError<{
      message: string;
    }>;

    toast.error(_err.response?.data.message ?? tString(_err.message));
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "colored"}
        limit={5}
      />
      {children}
    </>
  );
};
export default Alerts;
