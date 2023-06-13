import { motion } from "framer-motion";
import styled from "styled-components";

export const PopupWindowStyled = styled(motion.div)<{ $isLoader?: boolean }>`
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
