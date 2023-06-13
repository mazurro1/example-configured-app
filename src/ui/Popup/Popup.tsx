import type { T_BorderRadius, T_Colors } from "@styles/theme";
import AnimationContainer from "@ui/AnimationContainer";
import Background from "@ui/Background";
import { memo, PropsWithChildren, useEffect } from "react";

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
    <PopupWindowContainerStyled
      id={id}
      $fullScreen={fullScreen}
      key="modal"
      initial={
        inWindow
          ? { transform: "translateY(500px) scale(0)", opacity: 0 }
          : { opacity: 0 }
      }
      animate={
        inWindow
          ? {
              transform: "translateY(0px) scale(1)",
              opacity: 1,
              transition: { duration: 0.3 },
            }
          : { opacity: 1, transition: { duration: 0.2 } }
      }
      exit={
        inWindow
          ? {
              transform: "translateY(500px) scale(0)",
              opacity: 0,
              transition: { duration: 0.3 },
            }
          : { opacity: 0, transition: { duration: 0.2 } }
      }
    >
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
  );

  return (
    <>
      <AnimationContainer enabled={isOpen}>
        <PopupWindowStyled
          id="popup"
          $isLoader={isLoader}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {content}
        </PopupWindowStyled>
      </AnimationContainer>
    </>
  );
};
export default memo(Popup);
