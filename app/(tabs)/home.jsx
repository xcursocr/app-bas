import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView
      className="bg-black flex-1"
      style={[
        Platform.OS == "android" && { paddingBottom: 4 },
        Platform.OS == "ios" && { paddingBottom: 4 },
      ]}
    >
      <StatusBar barStyle={"dark-content"} />
      <View className="bg-gray-800 border border-yellow-200 my-4 mx-2 flex-1 justify-center items-center">
        {/* <Text
          className={`text-base mx-2 my-6 
                ${Platform.OS == "ios" ? "pt-[8px]" : "pt-1"}
               align-middle text-white`}
        >
          {" "}
          Welcome to{" "}
        </Text> */}
        <Text className="text-white font-bold text-6xl">
          WELCOME
        </Text>
        <Text className="text-yellow-200 text-center">Empecemos</Text>
      </View>
    </SafeAreaView>
  )
}