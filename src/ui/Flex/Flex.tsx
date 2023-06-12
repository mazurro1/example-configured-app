import type { T_Spacings } from "@styles/theme";
import MediaQuery from "@ui/MediaQuery";
import { memo, PropsWithChildren } from "react";

import { FlexStyled } from "./Flex.style";

export type T_FlexItem = {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexGrow?: number;
  gap?: T_Spacings;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "unset";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
};

type T_Flex = {
  onMobile?: T_FlexItem;
  onTabletOrMobile?: T_FlexItem;
  onTablet?: T_FlexItem;
  onDesktopOrTablet?: T_FlexItem;
  onDesktop?: T_FlexItem;
  onAll?: T_FlexItem;
  id?: string;
};

const Flex = ({
  children,
  onMobile,
  onTabletOrMobile,
  onTablet,
  onDesktopOrTablet,
  onDesktop,
  onAll,
  id,
}: PropsWithChildren & T_Flex) => {
  return (
    <>
      {onMobile && (
        <MediaQuery media="isMobile">
          <FlexStyled
            alignItems={onMobile?.alignItems}
            flexDirection={onMobile?.flexDirection}
            flexGrow={onMobile?.flexGrow}
            flexWrap={onMobile?.flexWrap}
            gap={onMobile?.gap}
            id={id}
            justifyContent={onMobile?.justifyContent}
          >
            {children}
          </FlexStyled>
        </MediaQuery>
      )}
      {onTabletOrMobile && (
        <MediaQuery media="isTabletOrMobile">
          <FlexStyled
            alignItems={onTabletOrMobile?.alignItems}
            flexDirection={onTabletOrMobile?.flexDirection}
            flexGrow={onTabletOrMobile?.flexGrow}
            flexWrap={onTabletOrMobile?.flexWrap}
            gap={onTabletOrMobile?.gap}
            id={id}
            justifyContent={onTabletOrMobile?.justifyContent}
          >
            {children}
          </FlexStyled>
        </MediaQuery>
      )}
      {onTablet && (
        <MediaQuery media="isTablet">
          <FlexStyled
            alignItems={onTablet?.alignItems}
            flexDirection={onTablet?.flexDirection}
            flexGrow={onTablet?.flexGrow}
            flexWrap={onTablet?.flexWrap}
            gap={onTablet?.gap}
            id={id}
            justifyContent={onTablet?.justifyContent}
          >
            {children}
          </FlexStyled>
        </MediaQuery>
      )}
      {onDesktopOrTablet && (
        <MediaQuery media="isDesktopOrTablet">
          <FlexStyled
            alignItems={onDesktopOrTablet?.alignItems}
            flexDirection={onDesktopOrTablet?.flexDirection}
            flexGrow={onDesktopOrTablet?.flexGrow}
            flexWrap={onDesktopOrTablet?.flexWrap}
            gap={onDesktopOrTablet?.gap}
            id={id}
            justifyContent={onDesktopOrTablet?.justifyContent}
          >
            {children}
          </FlexStyled>
        </MediaQuery>
      )}
      {onDesktop && (
        <MediaQuery media="isDesktop">
          <FlexStyled
            justifyContent={onDesktop?.justifyContent}
            alignItems={onDesktop?.alignItems}
            flexGrow={onDesktop?.flexGrow}
            gap={onDesktop?.gap}
            flexDirection={onDesktop?.flexDirection}
            flexWrap={onDesktop?.flexWrap}
            id={id}
          >
            {children}
          </FlexStyled>
        </MediaQuery>
      )}
      {onAll && (
        <FlexStyled
          alignItems={onAll?.alignItems}
          flexDirection={onAll?.flexDirection}
          flexGrow={onAll?.flexGrow}
          flexWrap={onAll?.flexWrap}
          gap={onAll?.gap}
          id={id}
          justifyContent={onAll?.justifyContent}
        >
          {children}
        </FlexStyled>
      )}
      {!onAll &&
        !onDesktop &&
        !onDesktopOrTablet &&
        !onTablet &&
        !onTabletOrMobile &&
        !onMobile && <FlexStyled id={id}>{children}</FlexStyled>}
    </>
  );
};

export default memo(Flex);
