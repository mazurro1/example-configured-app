import type { T_BorderRadius, T_Colors } from "@styles/theme";
import Animation from "@ui/Animation";
import Background from "@ui/Background";
import { memo, PropsWithChildren, useEffect } from "react";

import AnimationContainer from "@/ui/AnimationContainer";

import {
  PopupWindowContainerStyled,
  PopupWindowStyled,
  WindowHeightStyled,
} from "./Popup.style";

type T_Popup = {
  id?: string;
  isOpen: boolean;
  inWindow?: boolean;
  color?: T_Colors;
  maxWidth?: string;
  fullScreen?: boolean;
  minHeight?: string;
  width?: string;
  borderRadius?: T_BorderRadius;
  isLoader?: boolean;
};

const Popup = ({
  id,
  isOpen = false,
  inWindow = false,
  children,
  color = "background1",
  maxWidth,
  fullScreen,
  minHeight,
  width,
  borderRadius,
  isLoader,
}: PropsWithChildren<T_Popup>) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  const content = !inWindow ? (
    children
  ) : (
    <Animation
      id={id + "_container"}
      animation="fadeDownScale"
      animationValue={500}
    >
      <PopupWindowContainerStyled id={id} $fullScreen={fullScreen}>
        <Background color={color} borderRadius={borderRadius}>
          <WindowHeightStyled
            maxWidth={maxWidth}
            minHeight={minHeight}
            width={width}
          >
            {children}
          </WindowHeightStyled>
        </Background>
      </PopupWindowContainerStyled>
    </Animation>
  );

  return (
    <AnimationContainer enabled={isOpen}>
      <Animation id={id + "_window"} animation="fade">
        <PopupWindowStyled id="popup" $isLoader={isLoader}>
          {content}
        </PopupWindowStyled>
      </Animation>
    </AnimationContainer>
  );
};
export default memo(Popup);
