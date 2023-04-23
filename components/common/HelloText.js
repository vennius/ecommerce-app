import { Text } from "react-native";
const HelloText = ({ name }) => {
  return (
    <Text style={{
      fontFamily: "dmRegular",
    }}>Hello, {name}</Text>
  )
}

export default HelloText;
