import type { AnimationProps } from "framer-motion";

type T_Variants = AnimationProps["variants"];
export type T_PreparedAnimations = {
  fadeInOutDown: T_Variants;
  fadeInUpOutDown: T_Variants;
  fadeInOut: T_Variants;
};

export const defaultsTransitions = {
  slow: {
    duration: 0.5,
  },
  medium: {
    duration: 0.25,
  },
  fast: {
    duration: 0.075,
  },
};

export const preparedAnimations: T_PreparedAnimations = {
  fadeInOutDown: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
  fadeInUpOutDown: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
  fadeInOut: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};
