import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import PostDetail from "../components/PostDetail";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
          headerLeft: (props) => (
            <TouchableWithoutFeedback {...props} onPress={navigation.goBack}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
        name="PostDetail"
        component={PostDetail}
      />
    </Stack.Navigator>
  );
}
