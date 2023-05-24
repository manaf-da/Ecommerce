import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "Jul",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffbd00";
    },
    label: {
      position: "middle",

      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Months",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h2 className="mb-4 font-semibold text-4xl text-center mb-10 ">
        Dashboard
      </h2>
      <div className="flex justify-between items-center gap-3">
        <div className=" w-[400px]   rounded-sm border-t-4 border-[#ffbd00] p-4 shadow-xl  sm:p-6 lg:p-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <span className="text-base font-medium">Total</span>
              <span className="font-semibold text-2xl">$1000</span>
            </div>
            <div className="flex flex-col gap-4 text-base ">
              <span className="flex items-center text-red-600">
                <BsArrowDownRight />
                32%
              </span>
              <span>Compared to August 2022</span>
            </div>
          </div>
        </div>
        <div className=" w-[400px]   rounded-sm border-t-4 border-[#ffbd00] p-4 shadow-xl  sm:p-6 lg:p-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <span className="text-base font-medium">Total</span>
              <span className="font-semibold text-2xl">$1000</span>
            </div>
            <div className="flex flex-col gap-4 text-base ">
              <span className="flex items-center text-red-600">
                <BsArrowDownRight />
                32%
              </span>
              <span>Compared to August 2022</span>
            </div>
          </div>
        </div>
        <div className=" w-[400px]   rounded-sm border-t-4 border-[#ffbd00] p-4 shadow-xl  sm:p-6 lg:p-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <span className="text-base font-medium">Total</span>
              <span className="font-semibold text-2xl">$1000</span>
            </div>
            <div className="flex flex-col gap-4 text-base ">
              <span className="flex items-center text-red-600">
                <BsArrowDownRight />
                32%
              </span>
              <span>Compared to August 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="m-10 text-4xl font-semibold text-center">
          Income Statics
        </h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
      <div className="">
        <h3 className="m-10 text-4xl font-semibold text-center">
          Recent Orders
        </h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
      <div>
        <h3 className="m-10 text-4xl font-semibold text-center"></h3>
        <div className="">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
