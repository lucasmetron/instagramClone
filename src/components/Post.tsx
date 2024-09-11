import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

// import { Container } from './styles';

interface PostProps {
  image: string;
}

function Post({ image }: PostProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
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
