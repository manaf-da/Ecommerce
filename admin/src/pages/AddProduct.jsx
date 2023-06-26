import { useEffect, useState } from "react";
/* import Select from "react-select"; */
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getProductCategories } from "../features/pCategory/pCategorySlice";
import { getColors } from "../features/color/colorSlice";
import CustomInputs from "../components/CustomInputs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { deleteImages, uploadImages } from "../features/upload/uploadSlice";
import { createProducts } from "../features/product/productSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import Multiselect from "react-widgets/Multiselect";

let Schema = yup.object({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  quantity: yup.number().required("Quantity is Required"),
  color: yup.string().required("Color is Required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: Schema,
    onSubmit: () => {},
  });

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getProductCategories());
    dispatch(getColors());
  }, [dispatch]);

  const brandState = useSelector((state) => state.brands.brands);
  const productCatState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.colors.colors);
  const imgState = useSelector((state) => state.upload.images);
  const colors = [];
  colorState.forEach((i) => {
    colors.push({
      _id: i._id,
      color: i.title,
    });
  });
  console.log(colors);

  return (
    <div>
      <h2 className="font-semibold text-4xl text-center mb-10">Add Product</h2>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-4 mb-0 space-y-4 p-8 shadow-2xl"
        >
          <div className="relative mt-1">
            <CustomInputs
              type="text"
              name="title"
              className="w-full border-gray-100 p-4 text-sm shadow-md"
              placeholder="Enter Product Title"
              value={formik.values.title}
              onChange={formik.handleChange("title")}
            />

            <div className="text-red-600 text-xs mt-2">
              {formik.touched.title && formik.errors.title}
            </div>
          </div>
          <ReactQuill
            theme="snow"
            name="description"
            className="h-30"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
          <div className="text-red-600 text-xs ">
            {formik.touched.description && formik.errors.description}
          </div>
          <div className="relative mt-1">
            <CustomInputs
              type="text"
              name="price"
              className="w-full border-gray-100 p-4 text-sm shadow-md"
              placeholder="Enter Product Price"
              onChange={formik.handleChange("price")}
              value={formik.values.price}
            />
            <div className="text-red-600 text-xs mt-2">
              {formik.touched.price && formik.errors.price}
            </div>
          </div>
          <select
            name="brand"
            className="text-sm mb-2 w-full"
            onChange={formik.handleChange("brand")}
            value={formik.values.brand}
          >
            <option value="">Select Brand</option>
            {brandState.map((i, j) => (
              <option key={j} value={i.title}>
                {i.title}
              </option>
            ))}
          </select>
          <div className="text-red-600 text-xs mt-2">
            {formik.touched.brand && formik.errors.brand}
          </div>
          <select
            name="productCategory"
            className="text-sm mb-2 w-full"
            onChange={formik.handleChange("category")}
            value={formik.values.category}
          >
            <option value="">Select Category</option>
            {productCatState.map((i, j) => (
              <option key={j} value={i.title}>
                {i.title}
              </option>
            ))}
          </select>
          <div className="text-red-600 text-xs mt-2">
            {formik.touched.category && formik.errors.category}
          </div>
          <div className="relative mt-1">
            <CustomInputs
              type="number"
              name="quantity"
              className="w-full border-gray-100 p-4 text-sm shadow-md"
              placeholder="Enter Product Quantity"
              onChange={formik.handleChange("quantity")}
              value={formik.values.quantity}
            />

            <div className="text-red-600 text-xs mt-2">
              {formik.touched.quantity && formik.errors.quantity}
            </div>
          </div>

          <Multiselect dataKey="_id" textField="color" data={colors} />
          <div className="text-red-600 text-xs mt-2">
            {formik.touched.color && formik.errors.color}
          </div>

          <div className="bg-ffffff border p-10 text-center drop-shadow-md">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImages(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div
            className="drop-shadow bg-ffffff border flex p-4 flex-wrap gap-3
          "
          >
            {imgState.map((i, j) => {
              return (
                <div key={j} className="relative ">
                  <button
                    className="t-12 right-1 absolute "
                    onClick={() => dispatch(deleteImages(i.public_id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <img src={i.url} alt="" className="w-26 h-24" />
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="rounded-sm my-5 bg-[#333333] px-6 font-semibold py-2 text-sm text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
