const Jimp = require("jimp");

const manipulate = (tempPath) => {
  Jimp.read(tempPath)
    .then((img) => {
      return img
        .resize(250, 250) // resize
        .quality(69) // set JPEG quality
        .write("temp/pict.jpg"); // save
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = manipulate;
