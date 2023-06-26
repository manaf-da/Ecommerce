import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
    Accept: "application/json",
  },
};

const login = async (user) => {
  const response = await axios.post(`${baseUrl}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${baseUrl}user/allOrders`, config);

  const { data } = response; // Destructure the data property
  return data;
};

const authService = {
  login,
  getOrders,
};

export default authService;
