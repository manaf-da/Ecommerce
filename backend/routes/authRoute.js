const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getAUser,
  deleteAUser,
  updateAUser,
  blockAUser,
  unBlockAUser,
  handleRefreshToken,
  logoutAUser,
  updateAPassword,
  forgotPasswordToken,
  resetAPassword,
  loginAUser,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetAPassword);
router.put("/password", authMiddleware, updateAPassword);
router.post("/cart", authMiddleware, userCart);
router.post("/login", loginAUser);

router.post("/admin-login", loginAdmin);

router.get("/all-users", getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/logout", logoutAUser);
router.get("/:id", authMiddleware, isAdmin, getAUser);

router.delete("/:id", deleteAUser);
router.put("/edit-user", authMiddleware, updateAUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockAUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockAUser);

module.exports = router;
