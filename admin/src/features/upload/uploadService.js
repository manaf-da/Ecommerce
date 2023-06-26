import axios from "axios";
import { config } from "../../utility/axiosConfig";
import { baseUrl } from "../../utility/baseUrl";

const uploadImages = async (data) => {
  const response = await axios.post(`${baseUrl}upload/`, data, config);
  return response.data;
};

const deleteImages = async (id) => {
  const response = await axios.delete(
    `${baseUrl}upload/delete-img/${id}`,
    config
  );
  return response.data;
};

const uploadService = {
  uploadImages,
  deleteImages,
};

export default uploadService;
