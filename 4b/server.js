const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, console.log("DB connection successfull."));
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
