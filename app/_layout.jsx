import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ToogleStatusBar } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { isDarkTheme } from "@/theme";
import { Platform } from "react-native";

import { AuthProvider } from "@/context";

export default function RootLayout() {
  const StatusBarColor = ToogleStatusBar();
  const isDark = isDarkTheme();

  return (
    <AuthProvider>
      <SafeAreaView
        className={`${isDark ? "bg-slate-700" : "bg-white"} flex-1`}
        style={[
          Platform.OS == "android" && { paddingBottom: 55 },
          Platform.OS == "ios" && { paddingBottom: 20 },
        ]}
      >
        <StatusBar style={StatusBarColor} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaView>
    </AuthProvider>
  );
}
