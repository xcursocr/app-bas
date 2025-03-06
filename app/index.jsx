import { Text, View } from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";

export default function Index() {

  const { isDark } = useGlobalSearchParams();
  const route = useRouter()

  return (
    <View className={`${isDark ? "bg-slate-700" : ""} flex-1`}>
      <Text className={`${isDark ? "text-white" : ""}`}>Entrar al sistema</Text>
    </View>
  );
}
