import type { T_Media } from "@styles/theme";
import styled from "styled-components";

export const MediaQueryStyled = styled.div<{
  media: T_Media;
  width?: string | null;
}>`
  display: none;
  ${props => props.theme.media[props.media]} {
    display: block;
  }
  ${props => props.width && `width: ${props.width};`};
`;
