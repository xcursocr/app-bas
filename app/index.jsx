import { Redirect } from "expo-router";
import { useAuth } from "@/hooks";

export default function Index() {
  const { user, login } = useAuth();
  console.log("USER_DATA:", user);
  if (!user) {
    return <Redirect href="/login" />;
  }
  return <Redirect href="/home" />;
}
