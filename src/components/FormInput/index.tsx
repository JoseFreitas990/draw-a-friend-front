import { View, Text, TextInput, KeyboardType } from "react-native";
import React, { ChangeEvent, Component } from "react";
import { COLORS, FONTS, SIZES } from "../../assets/GlobalStyles";
import { onChange } from "react-native-reanimated";

type FormInputProps = {
  containerStyle?: object;
  inputContainerStyle?: object;
  placeholder?: string;
  inputStyle?: object;
  value?: string;
  prependComponent?: React.ReactNode;
  appendComponent?: React.ReactNode;
  onChange?: any;
  onPress?: () => void;
  editable?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  autoCompleteType?: any;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  maxLength?: number;
  placeholderTextColor?: string;
};

const FormInput = (props: FormInputProps) => {
  const {
    appendComponent,
    autoCapitalize,
    autoCompleteType,
    containerStyle,
    editable,
    inputContainerStyle,
    inputStyle,
    keyboardType,
    maxLength,
    onChange,
    onPress,
    placeholder,
    placeholderTextColor,
    prependComponent,
    secureTextEntry,
    value,
  } = props;
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          alignItems: "center",
          backgroundColor: COLORS.lightGray3,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
            ...FONTS.body3,
            ...inputStyle,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoComplete={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChange={(text) => onChange(text.currentTarget)}
          onPressIn={onPress}
          editable={editable}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
