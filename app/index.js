import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { HelloText, HomeScreen, ProfileImg } from "../components";

const Page = () => {

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white"
    }}>
      <Stack.Screen options={{
        headerShadowVisible: false,
        headerTitle: "",
        headerLeft: () => {
          return <HelloText name={"Stevennius"} />
        },
        headerRight: () => {
          return (
            <ProfileImg />
          )
        },

      }} />
      <HomeScreen />
    </SafeAreaView >
  );
}


export default Page;
