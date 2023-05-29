import React, { useEffect } from "react";
import { Table } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      price: `${productState[i].price}`,
      color: productState[i].color,
      action: (
        <div className="flex space-x-4 text-lg">
          <Link to="/">
            <AiOutlineEdit />
          </Link>
          <Link to="/">
            <AiOutlineDelete />
          </Link>
        </div>
      ),
    });
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <h3>Customers </h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
