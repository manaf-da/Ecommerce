// pCategoryService.js

import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getProductCategories = async () => {
  const response = await axios.get(`${baseUrl}category/`);
  return response.data;
};

const pCategoryService = {
  getProductCategories,
};

export default pCategoryService;
