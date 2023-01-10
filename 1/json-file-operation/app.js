// const fs = require("fs");

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
      // const data = await fs.readFile(filePath);
      // const text = data.toString();
      const text = await fs.readFile(filePath, "utf8");
      console.log(text);
      break;
    case "add":
      await fs.appendFile(filePath, data);
      break;
    case "replace":
      await fs.writeFile(filePath, data);
      break;
  }
};

fileOperation({ filePath: "./files/file.txt", action: "read" });
// fileOperation({
//   filePath: "./files/file.txt",
//   action: "add",
//   data: "\nBe happy!",
// });
// fileOperation({
//   filePath: "./files/file.txt",
//   action: "replace",
//   data: "Hello!!",
// });
// fileOperation({
//   filePath: "./files/file-a.txt",
//   action: "replace",
//   data: "Hi!",
// });
