const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => console.log(`Use port: ${PORT} to connect Mongo-DB`))
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
