import React from "react";
import { Image, View, Text, StyleSheet, Platform } from "react-native";
import { fonts } from "../styles/fonts";

// import { Container } from './styles';

const components = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
    </View>
  );
};

export default components;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#bbb",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  title: {
    color: "black",
    fontFamily: fonts.title,
    height: 30,
    fontSize: 28,
  },
});
