const express = require("express");
const ProductCategory = require("../models/productCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utility/validateMongodb");

const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await ProductCategory.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCategory = await ProductCategory.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await ProductCategory.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getACategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getCategory = await ProductCategory.findById(id);
    res.json(getCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getACategory,
};
