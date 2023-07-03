const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(PORT, () => {
      console.log("Db connected");
    })
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
