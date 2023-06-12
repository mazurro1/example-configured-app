import type { T_Spacings } from "@styles/theme";
import MediaQuery from "@ui/MediaQuery";
import { memo, PropsWithChildren } from "react";

import { SpacingStyled } from "./Spacing.style";

type T_SpacingItem = {
  margin?: T_Spacings;
  marginTop?: T_Spacings;
  marginBottom?: T_Spacings;
  marginLeft?: T_Spacings;
  marginRight?: T_Spacings;
  padding?: T_Spacings;
  paddingTop?: T_Spacings;
  paddingBottom?: T_Spacings;
  paddingLeft?: T_Spacings;
  paddingRight?: T_Spacings;
  align?: "center" | "left" | "right";
};

type T_Spacing = {
  onMobile?: T_SpacingItem;
  onTabletOrMobile?: T_SpacingItem;
  onTablet?: T_SpacingItem;
  onDesktopOrTablet?: T_SpacingItem;
  onDesktop?: T_SpacingItem;
  onAll?: T_SpacingItem;
  id?: string;
};

const Spacing = ({
  children,
  onMobile,
  onTabletOrMobile,
  onTablet,
  onDesktopOrTablet,
  onDesktop,
  onAll,
  id,
}: PropsWithChildren<T_Spacing>) => {
  return (
    <>
      {onMobile && (
        <MediaQuery media="isMobile">
          <SpacingStyled
            margin={onMobile?.margin}
            marginTop={onMobile?.marginTop}
            marginBottom={onMobile?.marginBottom}
            marginLeft={onMobile?.marginLeft}
            marginRight={onMobile?.marginRight}
            padding={onMobile?.padding}
            paddingTop={onMobile?.paddingTop}
            paddingBottom={onMobile?.paddingBottom}
            paddingLeft={onMobile?.paddingLeft}
            paddingRight={onMobile?.paddingRight}
            align={onMobile?.align}
            id={id}
          >
            {children}
          </SpacingStyled>
        </MediaQuery>
      )}
      {onTabletOrMobile && (
        <MediaQuery media="isTabletOrMobile">
          <SpacingStyled
            margin={onTabletOrMobile?.margin}
            marginTop={onTabletOrMobile?.marginTop}
            marginBottom={onTabletOrMobile?.marginBottom}
            marginLeft={onTabletOrMobile?.marginLeft}
            marginRight={onTabletOrMobile?.marginRight}
            padding={onTabletOrMobile?.padding}
            paddingTop={onTabletOrMobile?.paddingTop}
            paddingBottom={onTabletOrMobile?.paddingBottom}
            paddingLeft={onTabletOrMobile?.paddingLeft}
            paddingRight={onTabletOrMobile?.paddingRight}
            align={onTabletOrMobile?.align}
            id={id}
          >
            {children}
          </SpacingStyled>
        </MediaQuery>
      )}
      {onTablet && (
        <MediaQuery media="isTablet">
          <SpacingStyled
            margin={onTablet?.margin}
            marginTop={onTablet?.marginTop}
            marginBottom={onTablet?.marginBottom}
            marginLeft={onTablet?.marginLeft}
            marginRight={onTablet?.marginRight}
            padding={onTablet?.padding}
            paddingTop={onTablet?.paddingTop}
            paddingBottom={onTablet?.paddingBottom}
            paddingLeft={onTablet?.paddingLeft}
            paddingRight={onTablet?.paddingRight}
            align={onTablet?.align}
            id={id}
          >
            {children}
          </SpacingStyled>
        </MediaQuery>
      )}
      {onDesktopOrTablet && (
        <MediaQuery media="isDesktopOrTablet">
          <SpacingStyled
            margin={onDesktopOrTablet?.margin}
            marginTop={onDesktopOrTablet?.marginTop}
            marginBottom={onDesktopOrTablet?.marginBottom}
            marginLeft={onDesktopOrTablet?.marginLeft}
            marginRight={onDesktopOrTablet?.marginRight}
            padding={onDesktopOrTablet?.padding}
            paddingTop={onDesktopOrTablet?.paddingTop}
            paddingBottom={onDesktopOrTablet?.paddingBottom}
            paddingLeft={onDesktopOrTablet?.paddingLeft}
            paddingRight={onDesktopOrTablet?.paddingRight}
            align={onDesktopOrTablet?.align}
            id={id}
          >
            {children}
          </SpacingStyled>
        </MediaQuery>
      )}
      {onDesktop && (
        <MediaQuery media="isDesktop">
          <SpacingStyled
            margin={onDesktop?.margin}
            marginTop={onDesktop?.marginTop}
            marginBottom={onDesktop?.marginBottom}
            marginLeft={onDesktop?.marginLeft}
            marginRight={onDesktop?.marginRight}
            padding={onDesktop?.padding}
            paddingTop={onDesktop?.paddingTop}
            paddingBottom={onDesktop?.paddingBottom}
            paddingLeft={onDesktop?.paddingLeft}
            paddingRight={onDesktop?.paddingRight}
            align={onDesktop?.align}
            id={id}
          >
            {children}
          </SpacingStyled>
        </MediaQuery>
      )}
      {onAll && (
        <SpacingStyled
          margin={onAll?.margin}
          marginTop={onAll?.marginTop}
          marginBottom={onAll?.marginBottom}
          marginLeft={onAll?.marginLeft}
          marginRight={onAll?.marginRight}
          padding={onAll?.padding}
          paddingTop={onAll?.paddingTop}
          paddingBottom={onAll?.paddingBottom}
          paddingLeft={onAll?.paddingLeft}
          paddingRight={onAll?.paddingRight}
          align={onAll?.align}
          id={id}
        >
          {children}
        </SpacingStyled>
      )}
      {!onAll &&
        !onDesktop &&
        !onDesktopOrTablet &&
        !onTablet &&
        !onTabletOrMobile &&
        !onMobile && <SpacingStyled id={id}>{children}</SpacingStyled>}
    </>
  );
};

export default memo(Spacing);
