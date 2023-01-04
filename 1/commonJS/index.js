const users = require("./users");
console.log("Users:", users, "\n\nAdmins: ", users.admins, "\n");

// const { admins } = require("./users");
// console.log(admins);

// const { admins } = users;
// console.log(`Admins: ${admins}`);

const { getCurrentTime } = require("./date");
const currentTime = getCurrentTime();

// const currentTime = require("./date").getCurrentTime();
