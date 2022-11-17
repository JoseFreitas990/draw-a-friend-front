import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, FONTS } from "../../assets/GlobalStyles";

type ButtonProps = {
  contentContainerStyle?: object;
  disabled?: boolean;
  label?: string;
  labelStyle?: object;
  onPress?: () => void;
};

const TextButton = (props: ButtonProps) => {
  const { contentContainerStyle, disabled, label, labelStyle, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
