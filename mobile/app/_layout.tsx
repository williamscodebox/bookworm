import SafeScreen from "@/components/SafeScreen";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="index"
            options={{ title: "Home", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="(auth)"
            options={{ title: "Auth", headerTitleAlign: "center" }}
          />
        </Stack>
      </SafeScreen>
    </SafeAreaProvider>
  );
}
