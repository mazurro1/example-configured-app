import ColorModeContextProvider from "@context/ColorModeContext";
import type { PropsWithChildren } from "react";

import LayoutContextProvider from "@/context/LayoutContext";

const ContextWrapper = ({ children }: PropsWithChildren) => {
  return (
    <LayoutContextProvider>
      <ColorModeContextProvider>{children}</ColorModeContextProvider>
    </LayoutContextProvider>
  );
};

export default ContextWrapper;
