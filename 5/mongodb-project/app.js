// const mongoose = require("mongoose");
// require("dotenv").config();

// const { DB_HOST } = process.env;
// mongoose.set("strictQuery", false);
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connect success"))
//   .catch((error) => error.message);

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const DB_HOST =
  "mongodb+srv://h4y6:KraD1LKSu9YqvCg0@cluster-46-1.v9jqvon.mongodb.net/books-db?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database conect success"))
  .catch((error) => error.message);
