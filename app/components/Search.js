import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { getSinglePost, searchPosts } from "../api/Post";
import PostListItems from "./PostListItems";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  const handleOnSubmit = async () => {
    if (!query.trim()) return;

    // submit the form
    const { error, posts } = await searchPosts(query);
    if (error) console.log(error);

    setResults([...posts]);
  };

  const handlePostPress = async (slug) => {
    const { error, post } = await getSinglePost(slug);

    if (error) return console.log(error);
    navigation.navigate("PostDetail", { post });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Search..."
        style={styles.searchInput}
        onSubmitEditing={handleOnSubmit}
      />

      <ScrollView>
        {results.map((post) => {
          return (
            <View style={{ marginTop: 10 }} key={post.id}>
              <PostListItems
                post={post}
                onPress={() => handlePostPress(post.slug)}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
  },
  searchInput: {
    borderWidth: 2,
    borderColor: "#383838",
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
  },
});
