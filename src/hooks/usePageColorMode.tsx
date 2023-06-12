import { T_AllColors } from "@constants/colors";
import { ColorModeContext } from "@context/ColorModeContext";
import { useContext } from "react";

export type T_Colors = {
  colors?: T_AllColors;
};

export const usePageColorMode = () => {
  const { darkMode, handleChangePageColorMode } = useContext(ColorModeContext);

  return { darkMode, handleChangePageColorMode };
};
