import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/auth/authSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.auth.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      product: orderState[i].products.map((i) => {
        return i.product.title;
      }),
      action: (
        <div className="flex space-x-4 text-xl">
          <Link to="/">
            <AiOutlineEdit className="text-[#023e8a]" />
          </Link>
          <Link to="/">
            <AiOutlineDelete className="text-[#e71d36]" />
          </Link>
        </div>
      ),
    });
  }

  return (
    <div>
      <h3>Brands </h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
