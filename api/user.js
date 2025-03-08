const getMe = async () => {
  return { id: 1, name: "Luis", rol: "admin" };
};

export const userCtrl = {
  getMe,
};
