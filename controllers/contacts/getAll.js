const { Contact } = require("../../models/contact");

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;

  const skip = (page - 1) * limit;

  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
    // favorite: { $type: req.query.favorite },
    favorite,
  })
    // .sort({ favorite: req.query.favorite })
    .populate("owner", "name email subscription");

  res.json(result);
};

module.exports = getAll;
