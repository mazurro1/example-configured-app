import { createContext, PropsWithChildren, useState } from "react";

type T_ColorModeContext = {
  darkMode: boolean;
  handleChangePageColorMode: () => void;
};

export const ColorModeContext = createContext<T_ColorModeContext>({
  darkMode: false,
  handleChangePageColorMode: () => {},
});

const ColorModeContextProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChangePageColorMode = () => {
    setDarkMode(prevState => !prevState);
  };

  const contextValues: T_ColorModeContext = {
    darkMode: darkMode,
    handleChangePageColorMode: handleChangePageColorMode,
  };

  return (
    <ColorModeContext.Provider value={contextValues}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
