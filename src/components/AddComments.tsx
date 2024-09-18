import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Text,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { faker } from "@faker-js/faker";

import UsePostsContext from "../context/usePosts";

interface AddCommentsProps {
  idPost: number;
}

const AddComments = ({ idPost }: AddCommentsProps) => {
  const { posts, setPosts } = useContext(UsePostsContext);
  const [comment, setComment] = useState("");
  const [editMode, setEditMode] = useState(false);

  function handleAddComment() {
    if (comment === "") {
      setEditMode(false);
      return;
    }

    const newList = posts.map((post) => {
      if (post.id === idPost) {
        post.coments = [
          { comment: comment, nickName: faker.person.fullName() },
          ...post.coments,
        ];
      }
      return post;
    });

    setPosts(newList);
    setEditMode(false);
    setComment("");
  }

  return (
    <View style={{ flex: 1 }}>
      {editMode ? (
        <View style={styles.container}>
          <TextInput
            autoFocus
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
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  caption: {
    marginLeft: 10,
    fontSize: 10,
    color: "#ccc",
  },
});

export default AddComments;
