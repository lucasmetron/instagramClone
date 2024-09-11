import React from "react";
import { Image, View, Text, StyleSheet, Platform } from "react-native";
import { fonts } from "../styles/fonts";
import Entypo from "@expo/vector-icons/Entypo";

// import { Container } from './styles';

const components = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Entypo name="camera" size={30} color={"black"} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
    </View>
  );
};

export default components;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 50 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#bbb",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  title: {
    color: "black",
    fontFamily: fonts.text,
    height: 30,
    fontSize: 25,
  },
});
