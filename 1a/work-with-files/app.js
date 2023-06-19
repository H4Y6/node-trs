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
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      break;
    case "add":
      await fs.appendFile(filePath, data);
      break;
    case "replace":
      await fs.writeFile(filePath, data);
      break;

    default:
      break;
  }
};

// fileOperation({ filePath: "./files/file.txt", action: "read" });

// fileOperation({
//   filePath: "./files/file.txt",
//   action: "add",
//   data: "\nHello!",
// });

// fileOperation({
//   filePath: "./files/file2.txt",
//   action: "add",
//   data: "\nHello!",
// });

// fileOperation({
//   filePath: "./files/file.txt",
//   action: "replace",
//   data: "Good day!",
// });

// fileOperation({
//   filePath: "./files/file3.txt",
//   action: "replace",
//   data: "Good day!",
// });
