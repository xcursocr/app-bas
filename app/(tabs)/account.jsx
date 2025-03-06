import { useRouter } from "expo-router";
import { Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {

  const route = useRouter()

  return (
    <SafeAreaView
      className="bg-black flex-1"
      style={[
        Platform.OS == "android" && { paddingBottom: 4 },
        Platform.OS == "ios" && { paddingBottom: 4 },
      ]}
    >
      <StatusBar barStyle={"dark-content"} />
      <View className="bg-gray-800 border border-yellow-200 my-4 mx-2 flex-1">
        <ScrollView>
          {/* <Text
          className={`text-base mx-2 my-6 
              ${Platform.OS == "ios" ? "pt-[8px]" : "pt-1"}
             align-middle text-white`}
        >
          {" "}
          TUTO{" "}
        </Text> */}
          <TouchableOpacity
            className="m-6 flex-row justify-center p-10 bg-cyan-400"
            onPress={() => route.push("/profile")}
          >
            <Text className="text-white font-bold text-4xl">
              Perfil
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}