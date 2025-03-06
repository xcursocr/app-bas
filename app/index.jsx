import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {

  const route = useRouter()

  return (
    <View
      className="bg-red-500 h-48"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Pressable
        className="mt-4 p-4 bg-slate-700 rounded-xl"
        // onPress={() => route.push("/tutorial")}
        onPress={() => route.push("/(tabs)/home")}
      >
        <Text className="text-white">ENTRAR</Text>
      </Pressable>

    </View>
  );
}
