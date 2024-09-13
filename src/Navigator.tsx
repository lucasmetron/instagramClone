import React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/Feed";
import Entypo from "@expo/vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "Feed":
              return <Entypo name="home" size={30} color={color} />;

            case "Add Photo":
              return <Entypo name="camera" size={30} color={color} />;

            case "Profile":
              return <Entypo name="user" size={30} color={color} />;

            default:
              return <Entypo name="home" size={30} color={color} />;
          }
        },
        tabBarLabelStyle: {},
        tabBarActiveTintColor: "#395ff7",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,

          height: Dimensions.get("window").height * 0.07,
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Add Photo" component={Feed} />
      <Tab.Screen name="Profile" component={Feed} />
    </Tab.Navigator>
  );
};

export default Navigator;
