import { domAnimation, LazyMotion, m } from "framer-motion";
import { memo, PropsWithChildren } from "react";

import {
  getAnimation,
  getTransition,
  T_Animations,
  T_Transition,
} from "@/constants/animations";

type T_Animation = {
  id: string;
  transition?: T_Transition;
  animation?: T_Animations;
  showOnScroll?: boolean;
  showOnScrollOnce?: boolean;
  animationValue?: number;
  delay?: number;
};

const Animation = ({
  children,
  id,
  animation = "fade",
  transition = "medium",
  showOnScroll = false,
  showOnScrollOnce = false,
  animationValue = 100,
  delay = 0,
}: PropsWithChildren<T_Animation>) => {
  const selectAnimation = getAnimation({
    animation: animation,
    showOnScroll: showOnScroll,
    animationValue: animationValue,
  });

  const selectTransition = getTransition({
    transition: transition,
    delay: delay / 1000,
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        {...selectAnimation}
        key={id}
        transition={selectTransition}
        viewport={{ once: showOnScrollOnce }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default memo(Animation);
