// pCategoryService.js

import axios from "axios";
import { baseUrl } from "../../utility/baseUrl";

const getEnquiries = async () => {
  const response = await axios.get(`${baseUrl}enquiry/`);
  return response.data;
};

const enquiriesService = {
  getEnquiries,
};

export default enquiriesService;
