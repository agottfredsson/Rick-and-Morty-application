import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Items, Search, Champions } from "../scenes";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#424242",
        activeBackgroundColor: "#424242",
        activeTintColor: "white",
        style: {
          backgroundColor: "#424242",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Items}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="lightgrey" />,
        }}
      />
      <BottomTab.Screen
        name="Locations"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Entypo name="location-pin" size={24} color="lightgrey" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Characters"
        component={Champions}
        options={{
          tabBarIcon: () => (
            <Ionicons name="md-people" size={24} color="lightgrey" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
