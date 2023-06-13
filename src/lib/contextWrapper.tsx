import ColorModeContextProvider from "@context/ColorModeContext";
import type { PropsWithChildren } from "react";

import LayoutContextProvider from "@/context/LayoutContext";
import LoaderContextProvider from "@/context/LoaderContext";

const ContextWrapper = ({ children }: PropsWithChildren) => {
  return (
    <LayoutContextProvider>
      <ColorModeContextProvider>
        <LoaderContextProvider>{children}</LoaderContextProvider>
      </ColorModeContextProvider>
    </LayoutContextProvider>
  );
};

export default ContextWrapper;
