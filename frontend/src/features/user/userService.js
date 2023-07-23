import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, config } from "../../utility/axiosConfig";

export const createUser = createAsyncThunk(
  "auth/register",
  async (userData) => {
    const response = await axios.post(`${baseUrl}user/register`, userData);
    return response.data;
  }
);

export const signInUser = createAsyncThunk("auth/login", async (userData) => {
  const response = await axios.post(`${baseUrl}user/login`, userData);
  localStorage.setItem("customer", JSON.stringify(response.data));
  return response.data;
});

export const getUserWishlist = createAsyncThunk("user/wishlist", async () => {
  const response = await axios.get(`${baseUrl}user/wishlist`, config);
  return response.data;
});

export const authService = {
  createUser,
  signInUser,
  getUserWishlist,
};
