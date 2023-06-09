import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Sider, Content } = Layout;
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineMenuFold,
  AiOutlineUser,
} from "react-icons/ai";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { SiBrandfolder, SiMicrodotblog, SiBlogger } from "react-icons/si";
import { FaBlogger, FaBlog, FaBloggerB } from "react-icons/fa";
import { BiCategoryAlt, BiColorFill } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-16 flex justify-center items-center py-3 bg-[#ffbd00] p-4">
          <h2 className="text-white text-xl py-0 font-bold">M.shop</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signOut") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder />,
                  label: "Add Brand",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt />,
                  label: "Add Category",
                },
                {
                  key: "product-category-list",
                  icon: <BiCategoryAlt />,
                  label: "Product Category List",
                },
                {
                  key: "color",
                  icon: <BiColorFill />,
                  label: "Add Color",
                },
                {
                  key: "color-list",
                  icon: <BiColorFill />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <RiFileList2Line />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBlogger />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <SiMicrodotblog />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBlog />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <FaBloggerB />,
                  label: "Add  Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <SiBlogger />,
                  label: " Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <SiBlogger />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <div className=" flex justify-between items-center bg-[#FFFFFF] h-16 ">
          <Button
            type="button"
            icon={collapsed ? <AiOutlineMenuFold /> : <AiOutlineMenuFold />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Header />
        </div>

        <Content
          style={{
            margin: "10px 10px",
            padding: "10px",
            minHeight: "100vh",
            background: colorBgContainer,
            overflowY: "scroll",
            height: "85vh",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
