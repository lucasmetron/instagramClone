import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Gravatar from "@krosben/react-native-gravatar";

// import { Container } from './styles';

const Author = () => {
  return (
    <View style={styles.container}>
      <Gravatar
        email="laaispinheiroo@gmail.com"
        size={80}
        borderStyle="circle"
      />
      <Text style={styles.nickName}>Lucas Rosa</Text>
    </View>
  );
};

export default Author;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  nickName: {
    color: "#444",
    marginVertical: 10,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
