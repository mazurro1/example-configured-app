/* eslint-disable @next/next/no-img-element */
import { memo } from "react";

import { T_ImageItem, T_ImageItemProps } from "./Image";
import { ImageStyled } from "./Image.style";

const ImageItem = ({
  src,
  alt,
  borderRadius,
  cursor,
  ...restProps
}: T_ImageItem & T_ImageItemProps) => {
  if (!src) {
    return null;
  }

  return (
    <ImageStyled borderRadius={borderRadius} cursor={cursor}>
      <img src={src} alt={alt} {...restProps} />
    </ImageStyled>
  );
};

export default memo(ImageItem);
