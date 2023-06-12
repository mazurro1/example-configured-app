import type { T_BorderRadius } from "@styles/theme";
import { memo, PropsWithChildren } from "react";

import { SizeNoMediaStyled, SizeStyled } from "./Size.style";

type T_SizeItem = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  borderRadius?: T_BorderRadius;
};

type T_Size = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMobile?: T_SizeItem;
  onTabletOrMobile?: T_SizeItem;
  onTablet?: T_SizeItem;
  onDesktopOrTablet?: T_SizeItem;
  onDesktop?: T_SizeItem;
  onAll?: T_SizeItem;
};

const Size = ({
  children,
  onMobile,
  onTabletOrMobile,
  onTablet,
  onDesktopOrTablet,
  onDesktop,
  onAll,
  onClick = () => {},
}: PropsWithChildren & T_Size) => {
  return (
    <>
      {onMobile && (
        <SizeStyled media="isMobile" {...onMobile} onClick={e => onClick(e)}>
          {children}
        </SizeStyled>
      )}
      {onTabletOrMobile && (
        <SizeStyled
          media="isTabletOrMobile"
          {...onTabletOrMobile}
          onClick={e => onClick(e)}
        >
          {children}
        </SizeStyled>
      )}
      {onTablet && (
        <SizeStyled media="isTablet" {...onTablet} onClick={e => onClick(e)}>
          {children}
        </SizeStyled>
      )}
      {onDesktopOrTablet && (
        <SizeStyled
          media="isDesktopOrTablet"
          {...onDesktopOrTablet}
          onClick={e => onClick(e)}
        >
          {children}
        </SizeStyled>
      )}
      {onDesktop && (
        <SizeStyled media="isDesktop" {...onDesktop} onClick={e => onClick(e)}>
          {children}
        </SizeStyled>
      )}
      {onAll && (
        <SizeNoMediaStyled {...onAll} onClick={e => onClick(e)}>
          {children}
        </SizeNoMediaStyled>
      )}
      {!onAll &&
        !onDesktop &&
        !onDesktopOrTablet &&
        !onTablet &&
        !onTabletOrMobile &&
        !onMobile && (
          <SizeNoMediaStyled onClick={e => onClick(e)}>
            {children}
          </SizeNoMediaStyled>
        )}
    </>
  );
};

export default memo(Size);
