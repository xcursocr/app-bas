import AsyncStorage from "@react-native-async-storage/async-storage";

const setToken = async (token) => {
  await AsyncStorage.setItem("access", token);
};
const getToken = async () => {
  return await AsyncStorage.getItem("access");
};

const removeToken = async () => {
  await AsyncStorage.removeItem("access");
};

export const authCtrl = {
  setToken,
  getToken,
  removeToken,
};
