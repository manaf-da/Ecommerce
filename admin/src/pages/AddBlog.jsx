import React, { useState } from "react";
import CustomInputs from "../components/CustomInputs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddBlog = () => {
  const [description, setDescription] = useState();

  const handleDescription = (e) => {
    setDescription(e);
  };

  return (
    <div>
      <h2 className=" font-semibold text-4xl text-center mb-10 ">Dashboard</h2>

      <div className="">
        <form action="" className="mt-4 mb-0 space-y-4  p-8 shadow-2xl">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <div className="relative mt-1">
            <CustomInputs
              type="email"
              name="email"
              className="w-full  border-gray-100 p-4 text-sm shadow-md"
              placeholder="Enter Blog Title"
            />
          </div>
          <select name="" id="" className="text-sm mb-2 w-full">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={(evt) => {
              handleDescription(evt);
            }}
          />
          <button
            type="submit"
            className=" rounded-sm my-5  bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
