const express = require("express");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { register, login } = require("../../controllers/auth");
const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), register);

// signin
router.post("/login", validateBody(schemas.loginSchema), login);

module.exports = router;
