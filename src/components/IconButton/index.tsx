import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/GlobalStyles";

type IconButtonProps = {
  containerStyle?: object;
  icon: ImageSourcePropType;
  iconStyle: object;
  onPress: () => void;
};

const IconButton = (props: IconButtonProps) => {
  const { containerStyle, icon, iconStyle, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.white,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
