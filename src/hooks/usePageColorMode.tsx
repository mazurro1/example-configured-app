import { TAllColors } from "@constants/colors";
import { ColorModeContext } from "@context/ColorModeContext";
import { useContext } from "react";

export type TColors = {
  colors?: TAllColors;
};

export const usePageColorMode = () => {
  const { darkMode, handleChangePageColorMode } = useContext(ColorModeContext);

  return { darkMode, handleChangePageColorMode };
};
