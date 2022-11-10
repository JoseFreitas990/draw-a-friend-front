import { createStackNavigator } from "@react-navigation/stack";
import { Landing, Login, Register, Group } from "../../pages";
import GroupModal from "../group/GroupModal";
import React from "react";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export function GroupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Group" component={Group} />
      <Stack.Screen name="Group" component={GroupModal} />
    </Stack.Navigator>
  );
}
