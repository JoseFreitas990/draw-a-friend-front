import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Group, Home } from "../../pages";
import { GroupStack, HomeStack, ProfileStack } from "./StackNavigator";
import React from "react";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="GroupTab" component={GroupStack} />
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
}
