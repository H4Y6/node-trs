const Jimp = require("jimp");

const manipulate = (tempPath) => {
  Jimp.read(tempPath)
    .then((img) => {
      img.resize(250, 250); // resize
      img.quality(69); // set JPEG quality
      return img.write("temp/pict.jpg"); // save
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = manipulate;
