import axios from "axios";

const createUser = async (userData) => {
  const response = await axios.post(`${baseUrl}color/`, userData);
  const { data } = response;
  return data;
};

export const authService = {
  createUser,
};
