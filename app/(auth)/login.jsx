import { Image, Pressable, Text, View } from "react-native";
import { LoginForm } from "../../components/Auth/LoginForm";
import { useRouter } from "expo-router";
export default function Login() {
  const route = useRouter();

  return (
    <View className={`dark:bg-slate-800 bg-white flex-1 px-8 `}>
      <View className="flex-row justify-center items-center py-10">
        <Image
          // source={require(placehoderUser)}
          source={require("../../assets/images/logo.png")}
          className="w-64 h-64"
        />
      </View>
      {/* Form */}
      <LoginForm />
      <View className="flex-row justify-center py-5 mb-4">
        <Pressable onPress={() => route.push("/register")}>
          <Text className="dark:text-gray-100 font-normal">
            No tienes cuenta?{" "}
            <Text className="dark:text-yellow-300 font-black">
              Crear cuenta
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
