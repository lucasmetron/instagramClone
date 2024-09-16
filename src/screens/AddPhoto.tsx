import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

interface ImageProps {
  uri: string;
  base64: string | undefined;
}

const AddPhoto = () => {
  const [image, setImage] = useState<null | ImageProps>(null);
  const [comment, setComment] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage({
        uri: result.assets[0].uri,
        base64: result?.assets[0]?.base64 || undefined,
      });
    }
  };

  const takePhoto = async () => {
    const { granted } = await ImagePicker.getCameraPermissionsAsync();
    console.log("granted: ", granted);

    if (!granted) {
      Alert.alert(
        "Câmera não disponível",
        "A câmera não está disponível no simulador ou não possui permissões."
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage({
        uri: result.assets[0].uri,
        base64: result?.assets[0]?.base64 || undefined,
      });
    }
  };

  const save = async () => {
    Alert.alert("Imagem adicionada!");
  };

  useEffect(() => {
    (async () => {
      // Solicita permissões para acessar a galeria
      const mediaLibraryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("mediaLibraryStatus: ", mediaLibraryStatus);
      if (mediaLibraryStatus.status !== "granted") {
        Alert.alert(
          "Desculpe, precisamos da permissão para acessar a galeria!"
        );
      }

      // Solicita permissões para acessar a câmera
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      console.log("cameraStatus: ", cameraStatus);
      if (cameraStatus.status !== "granted") {
        Alert.alert("Desculpe, precisamos da permissão para acessar a câmera!");
      }
    })();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                image?.uri ||
                "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg",
            }}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity
            onPress={pickImage}
            style={{ ...styles.button, flex: 1 }}
          >
            <Text style={styles.buttonText}>Escolher da galeria</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={takePhoto}
            style={{ ...styles.button, flex: 1 }}
          >
            <Text style={styles.buttonText}>Tirar uma foto</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Algum comentário para foto?"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity onPress={save} style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  imageContainer: {
    backgroundColor: "#8c8888",
    width: "90%",
    height: (Dimensions.get("window").width * 3) / 4,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: (Dimensions.get("window").width * 3) / 4,
    resizeMode: "stretch",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 10,
  },
  button: {
    flex: 1,
    fontSize: 30,
    padding: 10,
    backgroundColor: "#4286f4",
    marginTop: 10,
  },
});

export default AddPhoto;
