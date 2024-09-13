import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { faker } from "@faker-js/faker";

// import { Container } from './styles';

interface AuthorProps {
  name: string;
}

const Author = ({ name }: AuthorProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: faker.image.url({ width: 300, height: 300 }) }}
      />
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
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#555",
  },
});
