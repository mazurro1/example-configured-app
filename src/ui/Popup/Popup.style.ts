import styled from "styled-components";

import { minWidthWindow } from "@/constants/layout";

export const PopupWindowStyled = styled.div<{ $isLoader?: boolean }>`
  position: fixed;
  ${props => (props.$isLoader ? `z-index: 1000;` : `z-index: 100;`)};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;

export const PopupWindowContainerStyled = styled.div<{
  $fullScreen?: boolean;
}>`
  ${props =>
    props.$fullScreen &&
    `position: absolute;
  bottom: 0;
  left: 0;
  right: 0;`}
  overflow-y: auto;
`;

export const WindowHeightStyled = styled.div<{
  maxWidth?: string;
  minHeight?: string;
  width?: string;
}>`
  width: ${props => (props.width ? props.width : "auto")};
  max-width: ${props =>
    props.maxWidth ? props.maxWidth : `${minWidthWindow}px`};
  margin-left: auto;
  margin-right: auto;
  min-height: ${props => (props.minHeight ? props.minHeight : "100%")};

  max-height: 90dvh;
  padding-left: ${props => props.theme.spacings[24]};
  padding-right: ${props => props.theme.spacings[24]};
  padding-top: ${props => props.theme.spacings[24]};
  padding-bottom: ${props => props.theme.spacings[24]};
  overflow-y: auto;
`;
