import { LayoutContext } from "@context/LayoutContext";
import { useContext } from "react";

export const useLayout = () => {
  const layouts = useContext(LayoutContext);

  return layouts;
};
