import { View, Text, Button, Animated, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AndroidSafeArea,
  COLORS,
  FONTS,
  SIZES,
} from "../../assets/GlobalStyles";
import { styles } from "./styles";
import { landingData } from "../../constants/landing";

export enum ROUTES {
  HOME = "Login",
  TEST = "Register",
}

const Landing = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  function renderFooter() {
    return (
      <View style={styles.footer}>
        <Dots />
        <View
          style={{
            flexDirection: "row",
            height: 55,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3,
                fontWeight: "600",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flex: 1,
              borderRadius: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
                fontWeight: "600",
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {landingData.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.secondary,
              COLORS.lightPrimary,
              COLORS.secondary,
            ],
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
      <Animated.FlatList
        data={landingData}
        horizontal
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.flatlistContainer}>
              <View style={{ flex: 1 }}></View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </SafeAreaView>
  );
};

export default Landing;
