import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../assets/GlobalStyles";

export const styles = StyleSheet.create({
  flatlistContainer: {
    width: SIZES.width,
    justifyContent: "center",
  },
  textContainer: {
    height: SIZES.height * 0.35,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: SIZES.padding,
  },
  title: {
    ...FONTS.h1,
    fontWeight: "700",
  },
  description: {
    marginTop: SIZES.radius,
    textAlign: "center",
    ...FONTS.body3,
    color: COLORS.lightGray2,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SIZES.height * 0.2,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
  },
});
