const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!req.body) {
    throw HttpError(400, "Missing field favorite");
  }

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateFavorite;
