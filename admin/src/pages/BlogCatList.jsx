import { useEffect } from "react";
import { Table } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogCategories } from "../features/bCategory/bCategorySlice";

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

const BlogCatList = () => {
  const dispatch = useDispatch();
  const blogCatState = useSelector((state) => state.bCategory.bCategories);

  useEffect(() => {
    dispatch(getBlogCategories());
  }, [dispatch]);

  const data1 = [];
  for (let i = 0; i < blogCatState.length; i++) {
    data1.push({
      key: i + 1,
      title: blogCatState[i].title,
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
      <h3>Customers </h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogCatList;
