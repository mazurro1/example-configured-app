import { AnimatePresence, useIsPresent } from "framer-motion";
import { memo, PropsWithChildren } from "react";

type T_AnimationContainer = {
  mode?: "sync" | "popLayout" | "wait";
  enabled?: boolean;
};

const AnimationContainer = ({
  mode = "wait",
  children,
  enabled = true,
}: PropsWithChildren<T_AnimationContainer>) => {
  const isPresent = useIsPresent();

  return (
    isPresent && (
      <AnimatePresence mode={mode}>{enabled && children}</AnimatePresence>
    )
  );
};

export default memo(AnimationContainer);
