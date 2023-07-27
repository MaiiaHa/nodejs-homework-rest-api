const { ctrlWrapper } = require("../../helpers");

const add = require("./add");
const getAll = require("./getAll");
const getById = require("./getById");
const updById = require("./updById");
const updateFavorite = require("./updateFavorite");
const deleteById = require("./deleteById");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updById: ctrlWrapper(updById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteById: ctrlWrapper(deleteById),
};
