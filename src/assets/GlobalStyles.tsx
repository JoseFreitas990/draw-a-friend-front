import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#488286", // Green
  secondary: "#373E40", // Gray

  lightPrimary: "#B7D5D4",
  darkPrimary: "#305252",

  lightSecondary: "#77878B",

  white: "#fff",
  black: "#000000",
  gray: "#6E6E6E",
  gray1: "#363636",
  gray2: "#4B4B4B",
  gray3: "#4D4D4D",
  lightGray: "#3B3B3B",
  lightGray2: "#707070",
  lightGray3: "#f0f0f0",

  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.4)",
  transparent: "transparent",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
  h1: {
    /*fontFamily: "Roboto-Black",*/ fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    /*fontFamily: "Roboto-Black",*/ fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    /*fontFamily: "Roboto-Black",*/ fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    /*fontFamily: "Roboto-Black",*/ fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const darkTheme = {
  name: "dark",
  backgroundColor: COLORS.secondary,
  textColor: COLORS.white,
  tabBackgroundColor: COLORS.lightGray,
  cardBackgroundColor: COLORS.gray3,
  bottomTabBarBackgroundColor: COLORS.gray3,
};

export const lightTheme = {
  name: "light",
  backgroundColor: COLORS.lightGray3,
  textColor: COLORS.black,
  //   cardBackgroundColor: COLORS.lightYellow,
  //   bottomTabBarBackgroundColor: COLORS.lightYellow,
  //   headerColor: COLORS.red,
};

export const AndroidSafeArea = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: COLORS.lightGray3,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export const selectedTheme = darkTheme;

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
