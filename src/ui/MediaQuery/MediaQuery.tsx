import { useLayout } from "@hooks/useLayout";
import type { T_Media } from "@styles/theme";
import type { PropsWithChildren } from "react";

import MediaQueryItem from "./MediaQueryItem";

type T_MediaQuery = {
  media: T_Media;
  width?: string | null;
};

const MediaQuery = ({
  children,
  media,
  width,
}: PropsWithChildren & T_MediaQuery) => {
  const {
    isReady,
    isDesktop,
    isDesktopOrTablet,
    isTablet,
    isTabletOrMobile,
    isMobile,
  } = useLayout();

  if (isReady) {
    return (
      <>
        {isMobile && media === "isMobile" && (
          <MediaQueryItem media="isMobile" width={width}>
            {children}
          </MediaQueryItem>
        )}
        {isTabletOrMobile && media === "isTabletOrMobile" && (
          <MediaQueryItem media="isTabletOrMobile" width={width}>
            {children}
          </MediaQueryItem>
        )}
        {isTablet && media === "isTablet" && (
          <MediaQueryItem media="isTablet" width={width}>
            {children}
          </MediaQueryItem>
        )}
        {isDesktopOrTablet && media === "isDesktopOrTablet" && (
          <MediaQueryItem media="isDesktopOrTablet" width={width}>
            {children}
          </MediaQueryItem>
        )}
        {isDesktop && media === "isDesktop" && (
          <MediaQueryItem media="isDesktop" width={width}>
            {children}
          </MediaQueryItem>
        )}
      </>
    );
  }

  return (
    <MediaQueryItem media={media} width={width}>
      {children}
    </MediaQueryItem>
  );
};
export default MediaQuery;
