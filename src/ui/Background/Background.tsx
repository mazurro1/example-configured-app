import type { T_BorderRadius, T_Colors } from "@styles/theme";
import { memo, PropsWithChildren } from "react";

import { BackgroundStyled } from "./Background.style";

type IBackgroundType = {
  id?: string;
  withBackground?: boolean;
  color?: T_Colors;
  borderRadius?: T_BorderRadius;
  width?: string;
  borderBottom?: boolean;
  borderRadiusTop?: T_BorderRadius;
};

const Background = ({
  id,
  children = null,
  color = "background1",
  withBackground = true,
  borderRadius,
  width,
  borderBottom,
  borderRadiusTop,
}: PropsWithChildren<IBackgroundType>) => {
  return (
    <BackgroundStyled
      id={id}
      color={color}
      withBackground={withBackground}
      borderRadius={borderRadius}
      width={width}
      borderBottom={borderBottom}
      borderRadiusTop={borderRadiusTop}
    >
      {children}
    </BackgroundStyled>
  );
};

export default memo(Background);
