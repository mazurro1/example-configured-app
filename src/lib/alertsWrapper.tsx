import "react-toastify/dist/ReactToastify.css";

import { queryClient } from "@constants/queryClient";
import { useTranslation } from "@hooks/useTranslations";
import type { AxiosError } from "axios";
import type { PropsWithChildren } from "react";
import { toast, ToastContainer } from "react-toastify";

import { usePageColorMode } from "@/hooks/usePageColorMode";

// import styled from "styled-components";
// const StyledContainer = styled(ToastContainer)`
//   &&&.Toastify__toast-container {
//   }
//   .Toastify__toast {
//   }
//   .Toastify__toast-body {
//   }
//   .Toastify__progress-bar {
//     background: red;
//   }
//   .Toastify__toast--default {
//     background: #fff;
//     color: #aaa;
//   }
//   .Toastify__toast--info {
//     background: #3498db;
//   }
//   .Toastify__toast--success {
//     background: #07bc0c;
//   }
//   .Toastify__toast--warning {
//     background: #f1c40f;
//   }
//   .Toastify__toast--error {
//     background: #e74c3c;
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
