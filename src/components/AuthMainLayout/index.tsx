import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  AndroidSafeArea,
  COLORS,
  FONTS,
  SIZES,
} from "../../assets/GlobalStyles";
import { MotiView, useAnimationState } from "moti";
import { Shadow } from "react-native-shadow-2";
import TextButton from "../TextButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormInput from "../FormInput";
import IconButton from "../IconButton";

const AuthMainLayout = () => {
  const [mode, setMode] = useState("signIn");

  const [name, setName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isVisible, setVisible] = useState<boolean>(false);

  const animationState = useAnimationState({
    signIn: {
      height: SIZES.height * 0.5,
    },
    signUp: {
      height: SIZES.height * 0.6,
    },
  });

  useEffect(() => {
    animationState.transitionTo("signIn");
  }, []);

  function renderSignIn() {
    return (
      <MotiView
        state={animationState}
        style={{
          marginTop: SIZES.padding,
          height: SIZES.height * 0.5,
          alignItems: "center",
        }}
      >
        <Shadow>
          <View style={styles.authContainer}>
            <Text
              style={{
                width: "60%",
                color: COLORS.dark,
                fontWeight: "800",

                ...FONTS.h1,
              }}
            >
              Sign in to continue
            </Text>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <FormInput
                containerStyle={{}}
                placeholder="Email"
                value={email}
                onChange={(text: React.SetStateAction<string>) =>
                  setEmail(text)
                }
                prependComponent={
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  />
                }
              />

              <FormInput
                containerStyle={{
                  marginTop: SIZES.radius,
                }}
                placeholder="Password"
                secureTextEntry={!isVisible}
                value={password}
                onChange={(text: React.SetStateAction<string>) =>
                  setPassword(text)
                }
                prependComponent={
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  />
                }
                appendComponent={
                  <>
                    <IconButton
                      icon={
                        isVisible
                          ? require("../../../assets/favicon.png")
                          : require("../../../assets/icon.png")
                      }
                      iconStyle={{
                        tintColors: COLORS.primary,
                      }}
                      onPress={() => setVisible(!isVisible)}
                    />
                  </>
                }
              />
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <TextButton
                  label="Forgot Password"
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: null,
                  }}
                  labelStyle={{
                    color: COLORS.secondary,
                    fontWeight: "600",
                    ...FONTS.h4,
                  }}
                />
              </View>
            </KeyboardAwareScrollView>
            <TextButton
              label="Login"
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColors: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
                fontWeight: "600",
              }}
            />
          </View>
        </Shadow>
      </MotiView>
    );
  }

  function renderSignUp() {
    return (
      <MotiView
        state={animationState}
        style={{
          marginTop: SIZES.padding,
          height: SIZES.height * 0.6,
          alignItems: "center",
        }}
      >
        <Shadow>
          <View style={styles.authContainer}>
            <Text
              style={{
                fontWeight: "800",

                ...FONTS.h1,
              }}
            >
              Create new account
            </Text>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                marginTop: SIZES.padding,
                paddingBottom: SIZES.padding * 2,
                justifyContent: "center",
              }}
            >
              <FormInput
                containerStyle={{}}
                placeholder="Name"
                value={name}
                onChange={(text: React.SetStateAction<string>) => setName(text)}
                prependComponent={
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  />
                }
              />
              <FormInput
                containerStyle={{ marginTop: SIZES.radius }}
                placeholder="Email"
                value={email}
                onChange={(text: React.SetStateAction<string>) =>
                  setEmail(text)
                }
                prependComponent={
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  />
                }
              />

              <FormInput
                containerStyle={{
                  marginTop: SIZES.radius,
                }}
                placeholder="Password"
                secureTextEntry={!isVisible}
                value={password}
                onChange={(text: React.SetStateAction<string>) =>
                  setPassword(text)
                }
                prependComponent={
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  />
                }
                appendComponent={
                  <>
                    <IconButton
                      icon={
                        isVisible
                          ? require("../../../assets/favicon.png")
                          : require("../../../assets/icon.png")
                      }
                      iconStyle={{
                        tintColors: COLORS.primary,
                      }}
                      onPress={() => setVisible(!isVisible)}
                    />
                  </>
                }
              />

              <FormInput
                containerStyle={{
                  marginTop: SIZES.radius,
                }}
                placeholder="ConfirmPassword"
                secureTextEntry={!isVisible}
                value={confirmPassword}
                onChange={(text: React.SetStateAction<string>) =>
                  setConfirmPassword(text)
                }
                prependComponent={
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  />
                }
                appendComponent={
                  <>
                    <IconButton
                      icon={
                        isVisible
                          ? require("../../../assets/favicon.png")
                          : require("../../../assets/icon.png")
                      }
                      iconStyle={{
                        tintColors: COLORS.primary,
                      }}
                      onPress={() => setVisible(!isVisible)}
                    />
                  </>
                }
              />

              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <TextButton
                  label="Forgot Password"
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: null,
                  }}
                  labelStyle={{
                    color: COLORS.secondary,
                    fontWeight: "600",
                    ...FONTS.h4,
                  }}
                />
              </View>
            </KeyboardAwareScrollView>
            <TextButton
              label="Create Account"
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColors: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
                fontWeight: "600",
              }}
            />
          </View>
        </Shadow>
      </MotiView>
    );
  }

  function renderAuthContainer() {
    if (mode === "signIn") {
      return renderSignIn();
    } else {
      return renderSignUp();
    }
  }

  function renderAuthContainerFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 80,
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: -30,
          marginHorizontal: SIZES.radius,
          borderBottomLeftRadius: SIZES.radius,
          borderBottomRightRadius: SIZES.radius,
          backgroundColor: COLORS.transparentWhite,
          zIndex: 0,
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body5,
          }}
        >
          {mode == "signIn"
            ? "Don't have an account?"
            : "I already have an account."}
        </Text>
        <TextButton
          label={mode == "signIn" ? "Create New Account" : "Sign In"}
          contentContainerStyle={{
            marginLeft: SIZES.base,
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.secondary,
            ...FONTS.h4,
          }}
          onPress={() => {
            if (animationState.current === "signIn") {
              animationState.transitionTo("signUp");
              setMode("signUp");
            } else {
              animationState.transitionTo("signIn");
              setMode("signIn");
            }
          }}
        />
      </View>
    );
  }

  function renderSocialLogins() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: -30,
          zIndex: -1,
        }}
      >
        <Text>OR login with</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
      {/* Logo */}
      <View
        style={{
          alignSelf: "center",
          marginTop: SIZES.padding / 1.5,
          width: 50,
          height: 50,
          backgroundColor: COLORS.secondary,
        }}
      ></View>
      {/* AuthContainer */}
      <View style={{ zIndex: 1 }}>{renderAuthContainer()}</View>
      {renderAuthContainerFooter()}
      {mode == "signIn" && renderSocialLogins()}
    </SafeAreaView>
  );
};

export default AuthMainLayout;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.lightGray3,
    justifyContent: "center",
  },
  authContainer: {
    flex: 1,
    width: SIZES.width - SIZES.padding * 2,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    zIndex: 1,
  },
});
