// const fs = require("fs");

// fs.readFile("./files/file.txt", "utf8", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
//-------------------------------

// const fs =require('fs/promises')
// const fs = require("fs").promises;

// fs.readFile("./files/file.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//------------------------------------

const fs = require("fs/promises");
const fileOperation = async ({ filePath, action, data }) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      // console.log(text.toString());
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

// fileOperation({ filePath: "./files/file.txt", action: "read" });
// fileOperation({
//   filePath: "./files/file.txt",
//   action: "add",
//   data: "\nHave a nice day!",
// });
fileOperation({
  filePath: "./files/file.txt",
  action: "replace",
  data: "Good day!",
});
