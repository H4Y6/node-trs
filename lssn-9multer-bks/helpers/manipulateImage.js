const Jimp = require("jimp");

const manipulateImage = (tempPath) =>
  Jimp.read(tempPath).then((image) => {
    return image.resize(250, 250).quality(79).write(tempPath);
  });

module.exports = manipulateImage;
