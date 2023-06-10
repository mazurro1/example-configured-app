import { createContext, PropsWithChildren, useState } from "react";

type TColorModeContext = {
  darkMode: boolean;
  handleChangePageColorMode: () => void;
};

export const ColorModeContext = createContext<TColorModeContext>({
  darkMode: false,
  handleChangePageColorMode: () => {},
});

const ColorModeContextProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChangePageColorMode = () => {
    setDarkMode(prevState => !prevState);
  };

  const contextValues: TColorModeContext = {
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
