import { store } from "./src/app/store";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import { AuthStack } from "./src/features/navigation/StackNavigator";

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    //  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
