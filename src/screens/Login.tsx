import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import IsLoggedInContext from "../context/useLogin";

const Login = () => {
  const { setIsLoggedIn } = useContext(IsLoggedInContext);
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });

  function login() {
    setIsLoggedIn(true);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        autoFocus
        keyboardType="email-address"
        value={dataLogin.email}
        onChangeText={(text) => {
          setDataLogin((obj) => ({ ...obj, email: text }));
        }}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={dataLogin.password}
        onChangeText={(text) => {
          setDataLogin((obj) => ({ ...obj, password: text }));
        }}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Criar nova conta</Text>
      </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: "#333",
  },
});

export default Login;
