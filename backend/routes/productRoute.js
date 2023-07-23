// productRoute.js

const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAProduct,
  getAllProducts,
  updateAProduct,
  deleteAProduct,
  addTOWishlist,
  rating,
} = require("../controller/productController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

// Protected routes with authMiddleware
router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/:id", authMiddleware, isAdmin, updateAProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteAProduct);
router.put("/wishlist", authMiddleware, addTOWishlist);
router.put("/rating", authMiddleware, rating);
router.get("/:id", getAProduct);
router.get("/", getAllProducts);

module.exports = router;
