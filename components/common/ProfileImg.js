import { View, Pressable, Image, StyleSheet } from "react-native";

const ProfileImg = () => {
  return (
    <Pressable>

      <Image source={{
        uri: "https://picsum.photos/200"
      }} style={styles.image} />

    </Pressable>
  );
  /*return (
    <Image style={styles.image} source={{
      uri: "https://picsum.photos/200"
    }} />
  )*/
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: "100%"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5
  }
})

export default ProfileImg;
