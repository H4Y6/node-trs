const Jimp = require("jimp");

async function manipulateImage(tempPath) {
  try {
    const avatar = await Jimp.read(tempPath);
    avatar.resize(250, 250); // resize
    avatar.quality(77);
    avatar.write(tempPath);
  } catch (error) {
    console.log(error);
  }
}

module.exports = manipulateImage;
