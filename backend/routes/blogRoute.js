const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  getABlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  disLikeBlog,
} = require("../controller/blogController.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, disLikeBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getABlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
