import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Author from "./Author";
import Comments from "./Comments";
import { CommentProps } from "../types/CommetProps";

// import { Container } from './styles';

interface PostProps {
  image: string;
  comments: CommentProps[];
}

function Post({ image, comments }: PostProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Author />
      <Comments comments={comments} />
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").width * 3) / 4,
    resizeMode: "cover",
  },
});
