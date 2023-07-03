const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(app.listen(PORT, console.log("DB connected")))
  .catch((error) => {
    error.message;
    process.exit(1);
  });
