const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const validateMongoDbId = require("../utility/validateMongodb");

const createBlog = asyncHandler(async (req, res) => {});

module.exports = { createBlog };
