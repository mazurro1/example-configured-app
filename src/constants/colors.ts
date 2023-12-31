export type T_AllColors = {
  primary1: string;
  primary2: string;
  primary3: string;
  background1: string;
};

export type T_Colors = "primary1" | "primary2" | "primary3" | "background1";

export const LIGHT_COLORS: T_AllColors = {
  primary1: "#FF7900",
  primary2: "#F16E00",
  primary3: "#fff0e5",
  background1: "#ffffff",
};

export const DARK_COLORS: T_AllColors = {
  primary1: "#123123",
  primary2: "#333333",
  primary3: "#gggggg",
  background1: "gray",
};
