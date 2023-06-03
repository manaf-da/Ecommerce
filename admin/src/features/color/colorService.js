import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getColors = async () => {
  const response = await axios.get(`${baseUrl}color/`);
  const { data } = response; // Destructure the data property
  return data;
};

const colorService = {
  getColors,
};

export default colorService;
