import { mobileSize, tabletSize } from "@constants/layout";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type LayoutT_Size = {
  width: number;
  height: number;
};

export type LayoutType = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isDesktopOrTablet: boolean;
  isTabletOrMobile: boolean;
  layoutSize: LayoutT_Size;
  isReady: boolean;
};

export const LayoutContext = createContext<{
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopOrTablet: boolean;
  isTabletOrMobile: boolean;
  isReady: boolean;
}>({
  isDesktop: false,
  isTablet: false,
  isMobile: false,
  isDesktopOrTablet: false,
  isTabletOrMobile: false,
  isReady: false,
});

const LayoutContextProvider = ({ children }: PropsWithChildren) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);

  function handleResize() {
    setIsMobile(mobileSize >= window.innerWidth);
    setIsTablet(
      mobileSize < window.innerWidth && tabletSize >= window.innerWidth,
    );
    setIsDesktop(tabletSize < window.innerWidth);
  }

  useEffect(() => {
    setIsReady(true);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contextValues = {
    isDesktop,
    isTablet,
    isMobile,
    isDesktopOrTablet: isDesktop || isTablet,
    isTabletOrMobile: isTablet || isMobile,
    isReady,
  };

  return (
    <LayoutContext.Provider value={contextValues}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
