import { DARK_COLORS, LIGHT_COLORS, T_AllColors } from "@constants/colors";
import { mobileSize, tabletSize } from "@constants/layout";
import type { DefaultTheme } from "styled-components";
export type { T_Colors } from "@constants/colors";

export type T_Spacings =
  | 0
  | 1
  | 2
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 14
  | 15
  | 16
  | 18
  | 20
  | 22
  | 24
  | 25
  | 28
  | 30
  | 34
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 100;
export type T_FontSize =
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 28
  | 30
  | 36
  | 48;
export type T_FontWeight = "thin" | "normal" | "semiBold" | "bold";
export type T_FontAlign = "center" | "left" | "right";

export type T_Media =
  | "isMobile"
  | "isTabletOrMobile"
  | "isTablet"
  | "isDesktopOrTablet"
  | "isDesktop";

export type T_BorderRadius = 0 | 5 | 8 | 12 | 20 | 24;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: T_AllColors;
    fontSize: {
      10: string;
      12: string;
      14: string;
      16: string;
      18: string;
      20: string;
      22: string;
      24: string;
      28: string;
      30: string;
      36: string;
      48: string;
    };
    fontWeight: {
      thin: number;
      normal: number;
      semiBold: number;
      bold: number;
    };
    borderRadius: {
      0: string;
      5: string;
      8: string;
      12: string;
      20: string;
      24: string;
    };
    spacings: {
      0: string;
      1: string;
      2: string;
      4: string;
      5: string;
      6: string;
      8: string;
      10: string;
      12: string;
      14: string;
      15: string;
      16: string;
      18: string;
      20: string;
      22: string;
      24: string;
      25: string;
      28: string;
      30: string;
      34: string;
      40: string;
      45: string;
      50: string;
      55: string;
      60: string;
      65: string;
      70: string;
      100: string;
    };
    media: {
      isMobile: string;
      isTabletOrMobile: string;
      isTablet: string;
      isDesktopOrTablet: string;
      isDesktop: string;
    };
  }
}

type T_MyTheme = {
  darkMode?: boolean;
};

export const myTheme = ({ darkMode }: T_MyTheme) => {
  const theme: DefaultTheme = {
    colors: darkMode ? DARK_COLORS : LIGHT_COLORS,
    fontSize: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      28: "1.75rem",
      30: "1.875rem",
      36: "2.25rem",
      48: "3rem",
    },
    fontWeight: {
      thin: 300,
      normal: 500,
      semiBold: 600,
      bold: 700,
    },
    borderRadius: {
      0: "0px",
      5: "5px",
      8: "8px",
      12: "12px",
      20: "20px",
      24: "24px",
    },
    spacings: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      25: "25px",
      28: "28px",
      30: "30px",
      34: "34px",
      40: "40px",
      45: "45px",
      50: "50px",
      55: "55px",
      60: "60px",
      65: "65px",
      70: "70px",
      100: "100px",
    },
    media: {
      isMobile: `@media only screen and (max-width: ${mobileSize}px)`,
      isTabletOrMobile: `@media only screen and (max-width: ${tabletSize}px)`,
      isTablet: `@media only screen and (min-width: ${
        mobileSize + 1
      }px) and (max-width: ${tabletSize}px)`,
      isDesktopOrTablet: `@media only screen and (min-width: ${
        mobileSize + 1
      }px)`,
      isDesktop: `@media only screen and (min-width: ${tabletSize + 1}px)`,
    },
  };

  return theme;
};
