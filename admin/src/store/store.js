import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pCategoryReducer from "../features/pCategory/pCategorySlice";
import blogsReducer from "../features/blogs/blogSlice";
import bCategoryReducer from "../features/bCategory/bCategorySlice";
import colorReducer from "../features/color/colorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brands: brandReducer,
    pCategory: pCategoryReducer,
    blogs: blogsReducer,
    bCategory: bCategoryReducer,
    colors: colorReducer,
  },
});
