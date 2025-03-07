import { View, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { UiButton } from "../Ui/UiButton";

export function RegisterForm() {
  const route = useRouter();

  const handleRegister = async () => {
    alert("Registrado");
    route.push("/register");
  };

  return (
    <View className="flex-1 justify-between align-middle">
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
      <View className="px-10">
        <UiButton
          text={"Registrarse"}
          router={() => route.push(handleRegister)}
        />
      </View>
    </View>
  );
}
