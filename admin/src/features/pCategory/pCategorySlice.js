// pCategorySlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pCategoryService from "./pCategoryService";

export const getProductCategories = createAsyncThunk(
  "pCategory/getProductCategories",
  async (_, thunkAPI) => {
    try {
      return await pCategoryService.getProductCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  pCategories: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const pCategorySlice = createSlice({
  name: "pCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.pCategories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default pCategorySlice.reducer;
