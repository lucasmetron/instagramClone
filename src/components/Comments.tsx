import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { CommentProps } from "../types/CommetProps";

interface CommentsProps {
  comments: CommentProps[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <View style={styles.container}>
      {comments.length === 0 ? (
        <View>
          <Text>Não há comentários</Text>
        </View>
      ) : (
        comments.map((item, i) => (
          <View style={styles.commentContainer} key={i}>
            <Text style={styles.nickName}>{item.nickName}: </Text>
            <Text numberOfLines={3} style={styles.comment}>
              {item.comment}
            </Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flex: 1,
    paddingHorizontal: 10,
  },
  commentContainer: {
    flexDirection: "row",
    marginTop: 5,
    flexWrap: "wrap",
  },
  nickName: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#444",
  },
  comment: {
    color: "#55",
  },
});

export default Comments;
