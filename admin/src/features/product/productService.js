import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${baseUrl}product/`);
  return response.data; // Return response.data directly
};

const productService = {
  getProducts,
};

export default productService;
