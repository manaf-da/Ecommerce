const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  getAllCoupons,
  createCoupon,
  updateACoupon,
  deleteACoupon,
} = require("../controller/couponController");

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", authMiddleware, isAdmin, getAllCoupons);
router.put("/:id", authMiddleware, isAdmin, updateACoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteACoupon);

module.exports = router;
