// const mongoose = require("mongoose");
// require("dotenv").config();

// const { DB_HOST } = process.env;
// mongoose.set("strictQuery", false);
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connect success"))
//   .catch((error) => error.message);

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
const { DB_HOST } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database`s connected");
  })
  .catch((error) => error.message);
