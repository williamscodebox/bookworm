import { Text, View } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dirm2bp53/image/upload/v1763951952/kpnncfde0xozzqiucbny.jpg",
        }}
      ></Image>
    </View>
  );
}
