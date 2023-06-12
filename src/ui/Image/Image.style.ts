import type { T_BorderRadius, T_FontAlign } from "@styles/theme";
import styled from "styled-components";

export const ImageStyled = styled.div<{
  align?: T_FontAlign;
  borderRadius?: T_BorderRadius;
  cursor?: string;
}>`
  ${props => props.align && `text-align: ${props.align};`}
  line-height: 0;
  ${props => props.cursor && `cursor: ${props.cursor};`}
  img {
    display: inline;
    ${props =>
      props.borderRadius &&
      `border-radius: ${props.theme.borderRadius[props.borderRadius]};`};
  }
`;
