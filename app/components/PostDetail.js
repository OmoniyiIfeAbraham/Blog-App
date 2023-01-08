import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";
import dateFormat from "dateformat";

const { width } = Dimensions.get("window");

export default function PostDetail({ route }) {
  const post = route.params?.post;

  const getImage = (uri) => {
    if (uri) return { uri };

    return require("./../../assets/blank.jpg");
  };

  if (!post) return null;

  const { title, thumbnail, tags, createdAt, author, content } = post;

  return (
    <ScrollView>
      <Image
        source={getImage(thumbnail)}
        style={{ width, height: width / 1.7 }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "700",
            color: "#383838",
            fontSize: 22,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 3,
          }}
        >
          <Text style={{ color: "#827E7E" }}>By {author}</Text>
          <Text style={{ color: "#827E7E" }}>
            {dateFormat(createdAt, "mediumDate")}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#827E7E" }}>Tags</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {tags.map((tag, index) => (
              <Text style={{ marginLeft: 5, color: "blue" }} key={tag + index}>
                #{tag}
              </Text>
            ))}
          </View>
        </View>
        <Markdown>{content}</Markdown>
      </View>
    </ScrollView>
  );
}
