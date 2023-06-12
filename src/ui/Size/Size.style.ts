import type { T_BorderRadius, T_Media } from "@styles/theme";
import styled from "styled-components";

export const SizeStyled = styled.div<{
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  media: T_Media;
  borderRadius?: T_BorderRadius;
}>`
  display: none;
  ${props => props.theme.media[props.media]} {
    display: block;
    width: ${props => (props.width ? props.width : "100%")};
    height: ${props => (props.height ? props.height : "auto")};
    max-width: ${props => (props.maxWidth ? props.maxWidth : "none")};
    min-width: ${props => (props.minWidth ? props.minWidth : "none")};
    max-height: ${props => (props.maxHeight ? props.maxHeight : "none")};
    min-height: ${props => (props.minHeight ? props.minHeight : "none")};
    ${props =>
      props.borderRadius &&
      `border-radius: ${props.theme.borderRadius[props.borderRadius]};`};

    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`;

export const SizeNoMediaStyled = styled.div<{
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  borderRadius?: T_BorderRadius;
}>`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "auto")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "none")};
  min-width: ${props => (props.minWidth ? props.minWidth : "initial")};
  max-height: ${props => (props.maxHeight ? props.maxHeight : "none")};
  min-height: ${props => (props.minHeight ? props.minHeight : "none")};
  ${props =>
    props.borderRadius &&
    `border-radius: ${props.theme.borderRadius[props.borderRadius]}`};

  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`;
