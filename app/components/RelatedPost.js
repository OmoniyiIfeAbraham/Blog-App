import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PostListItems from "./PostListItems";
import { getSimilarPost, getSinglePost } from "../api/Post";

export default function RelatedPost({ postId, onPostPress }) {
  const [posts, setPosts] = useState([]);

  const fetchSimilarPosts = async () => {
    const { error, post } = await getSimilarPost(postId);
    if (error) console.log(error);

    setPosts([...posts]);
  };

  useEffect(() => {
    fetchSimilarPosts();
  }, [postId]);

  return posts.map((post) => {
    return (
      <View style={{ marginTop: 10 }} key={post.id}>
        <PostListItems onPress={() => onPostPress(post.slug)} post={post} />
      </View>
    );
  });
}
