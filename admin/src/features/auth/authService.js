import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const login = async (user) => {
  const response = await axios.post(`${baseUrl}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
};

export default authService;
