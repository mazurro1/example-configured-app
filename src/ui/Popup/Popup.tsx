import { AnimatePresence, useIsPresent } from "framer-motion";
import { memo, PropsWithChildren, useEffect } from "react";

import { PopupWindowStyled } from "./Popup.style";

type T_Popup = {
  isOpen: boolean;
  inWindow?: boolean;
  isLoader?: boolean;
};

const Popup = ({
  isOpen = false,
  inWindow = true,
  isLoader,
  children,
}: PropsWithChildren<T_Popup>) => {
  const isPresent = useIsPresent();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  return (
    <>
      {isPresent && (
        <AnimatePresence>
          {isOpen && (
            <PopupWindowStyled
              id="popup"
              $isLoader={isLoader}
              initial={inWindow ? { opacity: 0 } : { opacity: 0 }}
              animate={
                inWindow
                  ? {
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }
                  : { opacity: 1, transition: { duration: 0.2 } }
              }
              exit={
                inWindow
                  ? {
                      opacity: 0,
                      transition: { duration: 0.3 },
                    }
                  : { opacity: 0, transition: { duration: 0.2 } }
              }
            >
              {children}
            </PopupWindowStyled>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
export default memo(Popup);
