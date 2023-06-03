import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getBlogCategories = async () => {
  const response = await axios.get(`${baseUrl}blog-Category/`);
  const { data } = response; // Destructure the data property
  return data;
};

const bCategoryService = {
  getBlogCategories,
};

export default bCategoryService;
