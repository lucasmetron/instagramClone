import React, { useState } from "react";
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
  console.log("image: ", image);
  const [comment, setCommet] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("result: ", result);

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
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma image</Text>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image?.uri || "" }} />
        </View>

        <TouchableOpacity onPress={pickImage} style={styles.buttom}>
          <Text style={styles.buttonText}>Escolha a foto</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Algum comentário para foto?"
          value={comment}
          onChangeText={(text) => setCommet(text)}
        />

        <TouchableOpacity onPress={save} style={styles.buttom}>
          <Text style={styles.buttom}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 20,
    color: "#fff",
  },
  input: {},
  buttom: {
    fontSize: 30,
    padding: 10,
    backgroundColor: "#4286f4",
  },
});

export default AddPhoto;
