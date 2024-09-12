import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert,
  Text,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const AddComments = () => {
  const [comment, setComment] = useState("");
  const [editMode, setEditMode] = useState(false);

  function handleAddComment() {
    Alert.alert("Adicionado", comment);
  }

  return (
    <View style={{ flex: 1 }}>
      {editMode ? (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={comment}
            onChangeText={(text) => setComment(text)}
            onSubmitEditing={handleAddComment}
          />
          <TWF>
            <FontAwesome
              name="times"
              onPress={() => setEditMode(false)}
              size={15}
              color={"#555"}
            />
          </TWF>
        </View>
      ) : (
        <TWF onPress={() => setEditMode(true)}>
          <View style={styles.container}>
            <FontAwesome
              name="comment-o"
              onPress={() => setEditMode(false)}
              size={25}
              color={"#555"}
            />
            <Text style={styles.caption}>Adicione um comentário...</Text>
          </View>
        </TWF>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    width: "90%",
  },
  caption: {
    marginLeft: 10,
    fontSize: 10,
    color: "#ccc",
  },
});

export default AddComments;
