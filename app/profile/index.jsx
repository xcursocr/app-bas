import { ScrollView, Text, View } from 'react-native'


export default function ProfileUser() {

  return (
    <ScrollView className="dark:bg-slate-100 px-4">
      <Text className="dark:text-slate-600 font-bold text-2xl py-4 px-2 text-center">Welcome {"User"}</Text>
      <View className="py-8">
        <Text>GO</Text>
      </View>
    </ScrollView>
  )
}

