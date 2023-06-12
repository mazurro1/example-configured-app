import styled from "styled-components";

import { T_FlexItem } from "./Flex";

export const FlexStyled = styled.div<T_FlexItem>`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
  gap: ${props => (props.gap ? props.theme.spacings[props.gap] : "unset")};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : "unset")};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "row"};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : "nowrap")};
`;
