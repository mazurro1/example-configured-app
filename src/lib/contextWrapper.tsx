import ColorModeContextProvider from "@context/ColorModeContext";
import { PropsWithChildren } from "react";

const ContextWrapper = ({ children }: PropsWithChildren) => {
  return <ColorModeContextProvider>{children}</ColorModeContextProvider>;
};

export default ContextWrapper;
