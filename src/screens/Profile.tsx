import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { faker } from "@faker-js/faker";

const Profile = () => {
  function logout() {}

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: faker.image.url({ width: 300, height: 300 }) }}
      />
      <Text style={styles.nickname}>{faker.person.firstName()}</Text>
      <Text style={styles.email}>{faker.internet.email()}</Text>

      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#555",
    marginTop: 80,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  email: {
    marginTop: 30,
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4",
    borderRadius: 5,
  },
  buttonText: { fontSize: 20, color: "#fff", textAlign: "center" },
});

export default Profile;
