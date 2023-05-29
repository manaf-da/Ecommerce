import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getUsers = async () => {
  const response = await axios.get(`${baseUrl}user/all-users`);
  return response.data; // Return response.data directly
};

const customerService = {
  getUsers,
};

export default customerService;
