const express = require("express");
const {
  getAll,
  getById,
  add,
  updById,
  updateFavorite,
  deleteById,
} = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", isValidId, getById);
router.post("/", validateBody(schemas.addSchema), add);
router.put("/:id", isValidId, validateBody(schemas.addSchema), updById);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);
router.delete("/:id", isValidId, deleteById);

module.exports = router;
