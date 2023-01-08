import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Search from "../components/Search";
import { AntDesign } from "@expo/vector-icons";
import AppNavigator from "./AppNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => {
            return <AntDesign name="home" size={24} color={color} />;
          },
        }}
        name="HomeScreen"
        component={AppNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => {
            return <AntDesign name="search1" size={24} color={color} />;
          },
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
}
