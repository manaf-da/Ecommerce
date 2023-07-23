import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";
import { config } from "../../utility/axiosConfig";

const login = async (user) => {
  const response = await axios.post(`${baseUrl}user/admin-login`, user, config);
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
