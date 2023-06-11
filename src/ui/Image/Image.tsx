import { memo } from "react";

type TImage = {
  src: string;
  alt: string;
};

const Image = ({ src, alt = "" }: TImage) => {
  if (!src) {
    return;
  }

  // eslint-disable-next-line @next/next/no-img-element,
  return <img src={src} alt={alt} />;
};

export default memo(Image);
