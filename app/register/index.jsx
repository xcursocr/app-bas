import { Image, Pressable, Text, View } from "react-native";
import placehoderUser from "../../assets/images/user.png";
import { RegisterForm } from "../../components/Auth/RegisterForm"
import { useRouter } from "expo-router";
export default function Index() {

  const router = useRouter()

  return (
    <View
      className={`dark:bg-slate-800 bg-white
				flex-1 px-8 `}>
      <View
        className="flex-row
				justify-center items-center py-20">
        <Image
          source={placehoderUser}
          className="w-40 h-40 rounded-full
				border-2 border-yellow-50"
        />
      </View>
      {/* 
				Form
				*/}
      <RegisterForm
      />
      <View

        className="flex-row
							justify-center
				py-5 mb-4">
        <Pressable onPress={() => router.push("/")}>
          <Text

            className="dark:text-gray-100 font-normal">
            Ya

            tienes

            cuenta?
            {" "}
            <Text className="dark:text-yellow-300 font-black">Inicia Session</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
