import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getBrands = async () => {
  const response = await axios.get(`${baseUrl}brand/`);
  const { data } = response; // Destructure the data property
  return data;
};

const brandService = {
  getBrands,
};

export default brandService;
