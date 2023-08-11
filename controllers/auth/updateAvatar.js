const { User } = require("../../models/user");
const path = require("path");
// const gravatar = require("gravatar");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  // const img = await Jimp.read(req.file.path);
  // await img
  //   .autocrop()
  //   .cover(250, 250, Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE)
  //   .writeAsync(req.file.path);

  // console.log("req.body", req.body);
  // console.log("req.file", req.file);
  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, filename);

  await fs.rename(tempUpload, resultUpload); // old file path and new file path

  // const uploadedAvatar = await Jimp.read(resultUpload);
  // await uploadedAvatar.resize(256, 256).write(resultUpload);

  const uploadedAvatar = await Jimp.read(resultUpload);
  await uploadedAvatar
    .autocrop()
    .cover(250, 250, Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE)
    .writeAsync(req.file.path);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
