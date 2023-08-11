const { User } = require("../../models/user");
const path = require("path");
// const gravatar = require("gravatar");
const fs = require("fs/promises");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  // console.log("req.body", req.body);
  // console.log("req.file", req.file);
  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload); // old file path and new file path
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
