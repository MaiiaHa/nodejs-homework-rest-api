const express = require("express");
const {
  getAll,
  getById,
  add,
  updById,
  updateFavorite,
  deleteById,
} = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, getAll);
router.get("/:id", authenticate, isValidId, getById);
router.post("/", authenticate, validateBody(schemas.addSchema), add);
router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updById
);
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);
router.delete("/:id", authenticate, isValidId, deleteById);

module.exports = router;
