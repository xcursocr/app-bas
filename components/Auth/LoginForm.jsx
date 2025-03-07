import { View, TextInput } from 'react-native'
import { useRouter } from "expo-router";
import { UiButton } from "../Ui/UiButton";

export function LoginForm() {

  const route = useRouter()

  return (
    <View className='flex-1 justify-between align-middle'>
      {/* form */}
      <View>
        <TextInput
          className="dark:placeholder:text-gray-50 dark:text-gray-100 border dark:border-yellow-50 px-8 mt-8"
          placeholder="Correo electronico"
          keyboardType="email-address"
        />
        <TextInput
          className="dark:placeholder:text-gray-50 dark:text-gray-100 border dark:border-yellow-50 px-8 mt-8"
          placeholder="Contraseña"
          secureTextEntry
        />
      </View>
      {/* button */}
      <View className='px-10'>
        <UiButton text={"Iniciar Session"} router={() => route.push("/(tabs)/home")} />
      </View>
    </View>
  )
}