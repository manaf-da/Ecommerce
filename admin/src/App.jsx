import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogLIst";
import CategoryList from "./pages/BlogCatList";
import BlogCatList from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorsList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCategory from "./pages/AddBlogCategory";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCategory";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog" element={<AddBlog />} />
          <Route path="blog-category-list" element={<BlogCatList />} />
          <Route path="blog-category" element={<AddBlogCategory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="color-list" element={<ColorList />} />
          <Route path="color" element={<AddColor />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="category" element={<AddCategory />} />
          <Route path="brand-list" element={<BrandList />} />
          <Route path="brand" element={<AddBrand />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="product" element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
