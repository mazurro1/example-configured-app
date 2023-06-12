import type { T_Media } from "@styles/theme";
import { memo, PropsWithChildren } from "react";

import { MediaQueryStyled } from "./MediaQuery.style";

type T_MediaQueryItem = {
  media: T_Media;
  width?: string | null;
};

const MediaQueryItem = ({
  media,
  width,
  children,
}: PropsWithChildren<T_MediaQueryItem>) => {
  return (
    <MediaQueryStyled media={media} width={width}>
      {children}
    </MediaQueryStyled>
  );
};

export default memo(MediaQueryItem);
