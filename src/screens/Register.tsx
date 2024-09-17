import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import IsLoggedInContext from "../context/useLogin";

const Register = () => {
  const navigation = useNavigation();
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        autoFocus
        value={dataForm.name}
        onChangeText={(text) => {
          setDataForm((obj) => ({ ...obj, name: text }));
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email-address"
        value={dataForm.email}
        onChangeText={(text) => {
          setDataForm((obj) => ({ ...obj, email: text }));
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={dataForm.name}
        onChangeText={(text) => {
          setDataForm((obj) => ({ ...obj, password: text }));
        }}
      />

      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  input: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#eee",
    height: 40,
    borderColor: "#333",
    borderWidth: 1,
    paddingLeft: 15,
  },
  btns: {
    flexDirection: "row",
    gap: 5,
  },
});

export default Register;
