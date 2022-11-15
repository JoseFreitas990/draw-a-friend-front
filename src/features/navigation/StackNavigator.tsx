import { createStackNavigator } from "@react-navigation/stack";
import { Landing, Login, Register, Group, Home, Profile } from "../../pages";
import GroupModal from "../group/GroupModal";
import React from "react";

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Group: undefined;
  GroupModal: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions = { headerShown: false };

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function GroupStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Group" component={Group} />
      <Stack.Screen name="GroupModal" component={GroupModal} />
    </Stack.Navigator>
  );
}

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
