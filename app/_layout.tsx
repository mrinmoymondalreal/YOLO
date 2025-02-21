import { SplashScreen, Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { COLORS } from "@/assets/colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    GuardianAngle: require("../assets/fonts/GuardianAngle.ttf"),
  });

  useEffect(() => {
    async function run() {
      if (isLoaded) {
        await SplashScreen.hideAsync(); //hide the splashscreen
      }
    }

    run();
  }, [isLoaded]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: COLORS.black,
      }}
    />
  );
}
