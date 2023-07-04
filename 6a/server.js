const mongoose = require("mongoose");
const { DB_HOST, PORT } = process.env;

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(app.listen(PORT, console.log("DB`s connected")))
  .catch((error) => {
    (error) => console.log(error.message);
    process.exit(1);
  });
