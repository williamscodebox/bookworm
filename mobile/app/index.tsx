import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Href, Link } from "expo-router";

const Signup = "/(auth)/signup" as Href;
const Login = "/(auth)" as Href;

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
        style={{ width: 200, height: 200, borderRadius: 10 }}
      ></Image>
      <Link href={Signup}>Signup Page</Link>
      <Link href={Login}>Login Page</Link>
    </View>
  );
}
