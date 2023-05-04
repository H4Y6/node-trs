const Jimp = require("jimp");

const manipulate = async (tempPath) => {
  try {
    const img = await Jimp.read(tempPath);
    img.resize(250, 250); // resize
    img.quality(69); // set JPEG quality
    img.write(tempPath); // save
  } catch (error) {
    console.error(error);
  }
};

module.exports = manipulate;
