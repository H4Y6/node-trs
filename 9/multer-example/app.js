const express = require("express");
const cors = require("cors");

const app = express();

app.listen(3000, () => {
  console.log("listening to port: 3000");
});
