const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT, () => console.log(`Use port: ${PORT}`)))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
