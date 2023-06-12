import { useLayout } from "@hooks/useLayout";
import type { T_BorderRadius } from "@styles/theme";
import MediaQuery from "@ui/MediaQuery";

import ImageItem from "./ImageItem";

export type T_ImageItem = {
  width?: number;
  height?: number;
  src: string;
  cursor?: string;
};

type T_Image = {
  onMobile?: T_ImageItem;
  onTabletOrMobile?: T_ImageItem;
  onTablet?: T_ImageItem;
  onDesktopOrTablet?: T_ImageItem;
  onDesktop?: T_ImageItem;
  onAll?: T_ImageItem;
  borderRadius?: T_BorderRadius;
};

export type T_ImageItemProps = {
  alt: string;
  id?: string;
  onClick?: () => void;
  borderRadius?: T_BorderRadius;
  cursor?: string;
};

const Image = ({
  alt,
  id = "",
  onClick = () => {},
  onMobile,
  onTabletOrMobile,
  onTablet,
  onDesktopOrTablet,
  onDesktop,
  onAll,
  borderRadius,
  cursor,
}: T_Image & T_ImageItemProps) => {
  const {
    isReady,
    isDesktop,
    isDesktopOrTablet,
    isTablet,
    isTabletOrMobile,
    isMobile,
  } = useLayout();

  if (isReady) {
    return (
      <>
        {onMobile && isMobile && (
          <MediaQuery media="isMobile">
            <ImageItem
              alt={alt}
              id={id}
              onClick={onClick}
              borderRadius={borderRadius}
              cursor={cursor}
              {...onMobile}
            />
          </MediaQuery>
        )}
        {onTabletOrMobile && isTabletOrMobile && (
          <MediaQuery media="isTabletOrMobile">
            <ImageItem
              alt={alt}
              id={id}
              onClick={onClick}
              borderRadius={borderRadius}
              cursor={cursor}
              {...onTabletOrMobile}
            />
          </MediaQuery>
        )}
        {onTablet && isTablet && (
          <MediaQuery media="isTablet">
            <ImageItem
              alt={alt}
              id={id}
              onClick={onClick}
              borderRadius={borderRadius}
              cursor={cursor}
              {...onTablet}
            />
          </MediaQuery>
        )}
        {onDesktopOrTablet && isDesktopOrTablet && (
          <MediaQuery media="isDesktopOrTablet">
            <ImageItem
              alt={alt}
              id={id}
              onClick={onClick}
              borderRadius={borderRadius}
              cursor={cursor}
              {...onDesktopOrTablet}
            />
          </MediaQuery>
        )}
        {onDesktop && isDesktop && (
          <MediaQuery media="isDesktop">
            <ImageItem
              alt={alt}
              id={id}
              onClick={onClick}
              borderRadius={borderRadius}
              cursor={cursor}
              {...onDesktop}
            />
          </MediaQuery>
        )}
        {onAll && (
          <ImageItem
            alt={alt}
            id={id}
            onClick={onClick}
            borderRadius={borderRadius}
            cursor={cursor}
            {...onAll}
          />
        )}
      </>
    );
  }
  return (
    <>
      {onMobile && (
        <MediaQuery media="isMobile">
          <ImageItem
            alt={alt}
            id={id}
            onClick={onClick}
            borderRadius={borderRadius}
            cursor={cursor}
            {...onMobile}
          />
        </MediaQuery>
      )}
      {onTabletOrMobile && (
        <MediaQuery media="isTabletOrMobile">
          <ImageItem
            alt={alt}
            id={id}
            onClick={onClick}
            borderRadius={borderRadius}
            cursor={cursor}
            {...onTabletOrMobile}
          />
        </MediaQuery>
      )}
      {onTablet && (
        <MediaQuery media="isTablet">
          <ImageItem
            alt={alt}
            id={id}
            onClick={onClick}
            borderRadius={borderRadius}
            cursor={cursor}
            {...onTablet}
          />
        </MediaQuery>
      )}
      {onDesktopOrTablet && (
        <MediaQuery media="isDesktopOrTablet">
          <ImageItem
            alt={alt}
            id={id}
            onClick={onClick}
            borderRadius={borderRadius}
            cursor={cursor}
            {...onDesktopOrTablet}
          />
        </MediaQuery>
      )}
      {onDesktop && (
        <MediaQuery media="isDesktop">
          <ImageItem
            alt={alt}
            id={id}
            onClick={onClick}
            borderRadius={borderRadius}
            cursor={cursor}
            {...onDesktop}
          />
        </MediaQuery>
      )}
      {onAll && (
        <ImageItem
          alt={alt}
          id={id}
          onClick={onClick}
          borderRadius={borderRadius}
          cursor={cursor}
          {...onAll}
        />
      )}
    </>
  );
};

export default Image;
