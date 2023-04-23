import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.hideAsync()

const RootLayout = () => {

  const [fontsLoaded] = useFonts({
    dmRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    dmMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    dmBold: require("../assets/fonts/DMSans-Bold.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("Tes")
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;


  return (
    <>
      <Stack />
    </>
  );
}

export default RootLayout;
