import axios from "axios";
import { baseUrl } from "../../utility/axiosConfig";

const createUser = async (userData) => {
  const response = await axios.post(`${baseUrl}user/register`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

const signInUser = async (userData) => {
  const response = await axios.post(`${baseUrl}user/login`, userData);
  if (response.data) return response.data;
};

export const authService = {
  createUser,
  signInUser,
};
