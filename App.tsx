import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import Navigator from "./src/Navigator";
import { IsLoggedInProvider } from "./src/context/useLogin";
import { UsePostsProvider } from "./src/context/usePosts";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  const onLayputRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} onLayout={onLayputRootView}>
        <IsLoggedInProvider>
          <UsePostsProvider>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
          </UsePostsProvider>
        </IsLoggedInProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
