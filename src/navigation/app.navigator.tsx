import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./bottom-tab.navigator";
import { CharacterDetail, Start } from "../scenes";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Tabs" component={BottomTabNavigator} />
        <Stack.Screen name="Detail" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
