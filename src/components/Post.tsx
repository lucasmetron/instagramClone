import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Author from "./Author";
import Comments from "./Comments";
import { CommentProps } from "../types/CommetProps";
import AddComments from "./AddComments";

// import { Container } from './styles';

interface PostProps {
  image: string;
  comments: CommentProps[];
  nameAuthor: string;
}

function Post({ image, comments, nameAuthor }: PostProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Author name={nameAuthor} />
      <Comments comments={comments} />
      <AddComments />
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
