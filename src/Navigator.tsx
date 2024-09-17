import React, { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feed from "./screens/Feed";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import IsLoggedInContext from "./context/useLogin";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
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
        tabBarActiveTintColor: "#395ff7",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: Dimensions.get("window").height * 0.07,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Add Photo" component={AddPhoto} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  useEffect(() => {
    // Lógica para verificar se o usuário está logado
    // Exemplo: setIsLoggedIn(true) se o usuário estiver logado
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Tabs" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
