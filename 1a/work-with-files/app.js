const { log } = require("console");
const fs = require("fs");

fs.readFile("./files/file.txt", (error, data) => {
  console.log(error);
  console.log(data);
});
