import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { faker } from "@faker-js/faker";

import { PostProps } from "../types/PostProps";
import Header from "../components/Header";
import Post from "../components/Post";
import UsePostsContext from "../context/usePosts";
import { fonts } from "../styles/fonts";

const Feed = () => {
  const { posts, setPosts } = useContext(UsePostsContext);

  function generatePosts() {
    const newPosts: PostProps[] = [];
    for (let i = 0; i < 10; i++) {
      newPosts.push({
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

    setPosts(newPosts);
  }

  useLayoutEffect(() => {
    generatePosts();
  }, []);

  return (
    <View style={styles.conatiner}>
      <Header />
      {posts.length > 0 ? (
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
              idPost={item.id}
            />
          )}
        />
      ) : (
        <View style={styles.noPosts}>
          <Text style={styles.noPostsText}>Não há posts</Text>
        </View>
      )}
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

  noPosts: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  noPostsText: {
    fontSize: 18,
    fontFamily: fonts.title,
    color: "gray",
  },
});

export default Feed;
