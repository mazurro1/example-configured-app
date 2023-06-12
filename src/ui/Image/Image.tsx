import { memo } from "react";

type T_Image = {
  src: string;
  alt: string;
  height?: string | number;
  width?: string | number;
};

const Image = ({ src, alt = "", ...restProps }: T_Image) => {
  if (!src) {
    return;
  }

  // eslint-disable-next-line @next/next/no-img-element,
  return <img src={src} alt={alt} {...restProps} />;
};

export default memo(Image);
