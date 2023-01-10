// const fs = require("fs");

const { error } = require("console");

// fs.readFile("./files/file.txt", "utf-8", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
// ------------------------------------------------------------

// const fs = require("fs").promises;
// // const fs = require('fs/promises')

// fs.readFile("./files/file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });
// ------------------------------------------------------------

const fs = require("fs/promises");

const fileOperation = async ({ filePath, action, data }) => {
  switch (action) {
    case "read":
      const data = await fs.readFile(filePath);
      const text = data.toString();
      console.log(text);
      break;
  }
};

fileOperation({ filePath: "./files/file.txt", action: "read" });
