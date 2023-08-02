const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
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

module.exports = router;
