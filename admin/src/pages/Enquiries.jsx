import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getEnquiries } from "../features/enquiries/enquiriesSlice";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  const dispatch = useDispatch();
  const enquiryState = useSelector((state) => state.enquiry.enquiries);

  useEffect(() => {
    dispatch(getEnquiries());
  }, [dispatch]);

  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      mobile: enquiryState[i].mobile,
      status: (
        <div>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-60 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Set Status</option>
          </select>
        </div>
      ),

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

export default Enquiries;
