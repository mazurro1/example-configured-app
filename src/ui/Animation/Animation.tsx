import {
  defaultsTransitions,
  preparedAnimations,
  T_PreparedAnimations,
} from "@constants/preparedAnimations";
import { AnimationProps as AnimationMotionProps, motion } from "framer-motion";
import { memo, PropsWithChildren } from "react";

interface AnimationProps {
  key: string;
  transition?: AnimationMotionProps["transition"] | "fast" | "medium" | "slow";
  animName?: string;
}

const Animation = ({
  children,
  key,
  animName = "fadeInOutDown",
  transition = "medium",
}: PropsWithChildren<AnimationProps>) => {
  return (
    <motion.div
      variants={preparedAnimations[animName as keyof T_PreparedAnimations]}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      key={key}
      transition={
        typeof transition === "string"
          ? defaultsTransitions[transition]
          : transition
      }
    >
      {children}
    </motion.div>
  );
};

export default memo(Animation);
