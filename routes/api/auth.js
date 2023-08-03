const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/auth");
const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), register);

// signin
router.post("/login", validateBody(schemas.loginSchema), login);

// current
router.get("/current", authenticate, getCurrent);

// logout
router.post("/logout", authenticate, logout);

// subscription =====
router.patch(
  "/subscription",
  authenticate,
  validateBody(schemas.updateFavoriteSubscriptionSchema),
  updateSubscription
);

// avatar
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
