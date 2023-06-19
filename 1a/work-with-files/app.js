// const fs = require("fs");

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
// ---------------------------------------

// const { error } = require("console");
// const fs = require("fs/promises");
// // const fs = require("fs").promises;

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data.toString()))
//   .catch((error) => console.log(error));
// ---------------------------------------

const fs = require("fs/promises");

const fileOperation = async ({ filePath, action, data }) => {
  switch (action) {
    case "read":
      const data = await fs.readFile(filePath);
      const text = data.toString();
      console.log(text);
      break;

    default:
      break;
  }
};

fileOperation({ filePath: "./files/file.txt", action: "read" });
