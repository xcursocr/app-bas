import { View, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { UiButton } from "@/components/Ui/UiButton";
import { authCtrl } from "../../api/auth";
import { useAuth } from "../../hooks";
import { useEffect } from "react";

export function LoginForm() {
  const route = useRouter();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      route.replace("/home");
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      const resp = { access: "SHJDK546456456456SSDSD3434" };
      await authCtrl.setToken(resp.access);
      await login(resp.access);
    } catch (err) {
      console.log(err);
    }
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
        <UiButton text={"Iniciar Session"} router={handleLogin} />
      </View>
    </View>
  );
}
