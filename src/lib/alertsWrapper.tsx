import "react-toastify/dist/ReactToastify.css";

import type { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

// import { usePageColorMode } from "@/hooks/usePageColorMode";

const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;

const Alerts = ({ children }: PropsWithChildren) => {
  // const { darkMode } = usePageColorMode();

  return (
    <>
      <StyledContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme={darkMode ? "dark" : "light"}
        limit={5}
      />
      {children}
    </>
  );
};
export default Alerts;
