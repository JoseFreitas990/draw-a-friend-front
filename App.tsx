import { store } from "./src/app/store";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import { AuthStack } from "./src/features/navigation/StackNavigator";
import TabNavigator from "./src/features/navigation/TabNavigation";

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    //  </Provider>
  );
}
