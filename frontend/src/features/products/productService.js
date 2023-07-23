import axios from "axios";
import { baseUrl, config } from "../../utility/axiosConfig";

const getProducts = async (userData) => {
  const response = await axios.get(`${baseUrl}product`);
  if (response.data) return response.data;
};

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${baseUrl}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) return response.data;
};

export const productService = {
  getProducts,
  addToWishlist,
};
