const Jimp = require("jimp");

(async function manipulate() {
  const img = await Jimp.read("img/avatar-raw.jpg");
  img.resize(250, 250); // resize
  img.quality(77);
  img.write("img/avatar.jpg");
})();

// Jimp.read("./avatar.jpg")
//   .then((lenna) => {
//     return lenna
//
//       .write("lena-small-bw.jpg"); // save
//     console.log("lena-small-bw.jpg");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Jimp.read("img/avatar.jpg", (err, img) => {
//   if (err) throw err;
//   img.resize(250, 250).quality(85).write("tmp/avatar.jpg");
// });
