import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Gravatar from "@krosben/react-native-gravatar";
import { faker } from "@faker-js/faker";

// import { Container } from './styles';

interface AuthorProps {
  name: string;
}

const Author = ({ name }: AuthorProps) => {
  return (
    <View style={styles.container}>
      <Gravatar email={faker.internet.email()} size={80} borderStyle="circle" />
      <Text style={styles.nickName}>{name}</Text>
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
