const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const updateSubscription = async (req, res, next) => {
  const { _id } = req.user;
  console.log(req.user);
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  if (!req.body) {
    throw HttpError(400, "Missing field favorite");
  }

  if (!result) {
    throw HttpError(404, "Not found");
  }

  const { name, email, subscription } = result;
  res.status(200).json({ name, email, subscription });
};

module.exports = updateSubscription;
