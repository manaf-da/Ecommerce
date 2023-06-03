import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const BrandList = () => {
  const dispatch = useDispatch();
  const brandState = useSelector((state) => state.brands.brands);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      title: brandState[i].title,
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

export default BrandList;
