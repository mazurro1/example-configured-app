import type { T_BorderRadius, T_Colors } from "@styles/theme";
import styled from "styled-components";

export const BackgroundStyled = styled.div<{
  color: T_Colors;
  withBackground: boolean;
  borderRadius?: T_BorderRadius;
  borderBottom?: boolean;
  borderRadiusTop?: T_BorderRadius;
  width?: string;
}>`
  ${props =>
    props.borderRadiusTop &&
    `  border-top-left-radius: ${
      props.theme.borderRadius[props.borderRadiusTop]
    };
  border-top-right-radius: ${props.theme.borderRadius[props.borderRadiusTop]};`}

  ${props =>
    props.borderBottom && `border-bottom: 1px solid rgba(0, 0, 0, 0.5);`}
  ${props =>
    props.withBackground &&
    `background-color: 
    ${props.theme.colors?.[props.color]};`}
  ${props =>
    props.borderRadius &&
    `border-radius: ${props.theme.borderRadius[props.borderRadius]};`}
    ${props => props.width && `width: ${props.width}};`}

  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`;
