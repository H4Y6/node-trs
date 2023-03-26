// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const app = require("./app");

// const { DB_HOST, PORT = 3000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => app.listen(PORT))
//   .catch((error) => {
//     console.log(error);
//     process.exit(1);
//   });

const mongoose = require("mongoose");

const app = require("./app");
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.log(error);

    process.exit(1);
  });
