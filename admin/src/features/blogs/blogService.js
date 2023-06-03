import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getBlogs = async () => {
  const response = await axios.get(`${baseUrl}blog/`);
  const { data } = response; // Destructure the data property
  return data;
};

const blogService = {
  getBlogs,
};

export default blogService;
