export type T_Animations =
  | "fadeDown"
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "fade"
  | "fadeDownScale"
  | "fadeScale";

export type T_Transition = "fast" | "medium" | "slow";

type T_GetTransition = {
  transition: T_Transition;
  delay: number;
};

export const getTransition = ({ transition, delay }: T_GetTransition) => {
  switch (transition) {
    case "fast": {
      return {
        duration: 0.075,
        delay: delay,
      };
    }
    case "medium": {
      return {
        duration: 0.25,
        delay: delay,
      };
    }
    case "slow": {
      return {
        duration: 0.5,
        delay: delay,
      };
    }
    default: {
      return {
        duration: 0.25,
        delay: delay,
      };
    }
  }
};

type T_GetAnimation = {
  animation: T_Animations;
  showOnScroll: boolean;
  animationValue: number;
};

export const getAnimation = ({
  animation,
  showOnScroll,
  animationValue,
}: T_GetAnimation) => {
  switch (animation) {
    case "fadeDownScale": {
      return {
        initial: {
          opacity: 0,
          transform: `translateY(${animationValue}px) scale(0)`,
        },
        whileInView: showOnScroll
          ? { opacity: 1, transform: "translateY(0px) scale(1)" }
          : {},
        animate: showOnScroll
          ? {}
          : { opacity: 1, transform: "translateY(0px) scale(1)" },
        exit: {
          opacity: 0,
          transform: `translateY(${animationValue}px) scale(0)`,
        },
      };
    }
    case "fadeScale": {
      return {
        initial: {
          opacity: 0,
          transform: `scale(0)`,
        },
        whileInView: showOnScroll ? { opacity: 1, transform: "scale(1)" } : {},
        animate: showOnScroll ? {} : { opacity: 1, transform: "scale(1)" },
        exit: {
          opacity: 0,
          transform: `scale(0)`,
        },
      };
    }
    case "fadeUp": {
      return {
        initial: { opacity: 0, y: animationValue },
        whileInView: showOnScroll ? { opacity: 1, y: 0 } : {},
        animate: showOnScroll ? {} : { opacity: 1, y: 0 },
        exit: { opacity: 0, y: animationValue },
      };
    }
    case "fadeDown": {
      return {
        initial: { opacity: 0, y: -animationValue },
        whileInView: showOnScroll ? { opacity: 1, y: 0 } : {},
        animate: showOnScroll ? {} : { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -{ animationValue } },
      };
    }
    case "fadeLeft": {
      return {
        initial: { opacity: 0, x: -animationValue },
        whileInView: showOnScroll ? { opacity: 1, x: 0 } : {},
        animate: showOnScroll ? {} : { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -animationValue },
      };
    }
    case "fadeRight": {
      return {
        initial: { opacity: 0, x: animationValue },
        whileInView: showOnScroll ? { opacity: 1, x: 0 } : {},
        animate: showOnScroll ? {} : { opacity: 1, x: 0 },
        exit: { opacity: 0, x: animationValue },
      };
    }
    case "fade": {
      return {
        initial: { opacity: 0 },
        whileInView: showOnScroll ? { opacity: 1 } : {},
        animate: showOnScroll ? {} : { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
    default: {
      return {
        initial: { opacity: 0 },
        whileInView: showOnScroll ? { opacity: 1 } : {},
        animate: showOnScroll ? {} : { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
  }
};
