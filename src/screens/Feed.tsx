import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { faker } from "@faker-js/faker";
import { PostProps } from "../types/PostProps";
import Header from "../components/Header";
import Post from "../components/Post";

const Feed = () => {
  const posts: PostProps[] = [];

  for (let i = 0; i <= 10; i++) {
    posts.push({
      id: Math.random() * 100,
      nickname: faker.person.fullName(),
      email: faker.internet.email(),
      image: faker.image.url({ width: 900, height: 900 }),
      coments:
        i !== 3
          ? [
              {
                nickName: faker.person.fullName(),
                comment: faker.lorem.text(),
              },
              {
                nickName: faker.person.fullName(),
                comment: faker.lorem.lines(1),
              },
            ]
          : [],
    });
  }

  return (
    <View style={styles.conatiner}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={(i) => i.id.toString()}
        horizontal={false}
        renderItem={({ item }) => (
          <Post
            key={item.id}
            image={item.image}
            comments={item.coments}
            nameAuthor={item.nickname}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Feed;
