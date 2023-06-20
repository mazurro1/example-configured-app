import type { T_Spacings } from "@styles/theme";
import styled from "styled-components";

export const SpacingStyled = styled.div<{
  $margin?: T_Spacings;
  $marginTop?: T_Spacings;
  $marginBottom?: T_Spacings;
  $marginLeft?: T_Spacings;
  $marginRight?: T_Spacings;
  $padding?: T_Spacings;
  $paddingTop?: T_Spacings;
  $paddingBottom?: T_Spacings;
  $paddingLeft?: T_Spacings;
  $paddingRight?: T_Spacings;
  $align?: "center" | "left" | "right";
}>`
  ${props =>
    props.$margin !== undefined &&
    `margin: ${props.theme.spacings[props.$margin]}`};

  ${props =>
    props.$marginTop !== undefined &&
    `margin-top: ${props.theme.spacings[props.$marginTop]}`};

  ${props =>
    props.$marginBottom !== undefined &&
    `margin-bottom: ${props.theme.spacings[props.$marginBottom]}`};

  ${props =>
    props.$marginLeft !== undefined &&
    `margin-left: ${props.theme.spacings[props.$marginLeft]}`};

  ${props =>
    props.$marginRight !== undefined &&
    `margin-right: ${props.theme.spacings[props.$marginRight]}`};

  ${props =>
    props.$padding !== undefined &&
    `padding: ${props.theme.spacings[props.$padding]}`};

  ${props =>
    props.$paddingTop !== undefined &&
    `padding-top: ${props.theme.spacings[props.$paddingTop]}`};

  ${props =>
    props.$paddingBottom !== undefined &&
    `padding-bottom: ${props.theme.spacings[props.$paddingBottom]}`};

  ${props =>
    props.$paddingLeft !== undefined &&
    `padding-left: ${props.theme.spacings[props.$paddingLeft]}`};

  ${props =>
    props.$paddingRight !== undefined &&
    `padding-right: ${props.theme.spacings[props.$paddingRight]}`};

  ${props => props.$align !== undefined && `text-align: ${props.$align}`};

  transition-property: padding;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`;
