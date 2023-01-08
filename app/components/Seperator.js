import { View } from "react-native";
import React from "react";

export default function Seperator({
  width = "100%",
  height = 1,
  backgroundColor = "#d3d3d3",
  style,
}) {
  return (
    // <Text>{item.title}</Text>
    <View
      style={[{ width, height, backgroundColor, alignSelf: "center" }, style]}
    />
  );
}
