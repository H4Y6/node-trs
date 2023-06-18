const getCurrentMontn = require("./date/getCurrentMonth");
const users = require("./users");
// const admins = require("./users").admins;
const admins = users.admins;
// const { admins } = require("./users");

const currentMonth = require("./date");

console.log(users);
console.log(admins);
console.log(currentMonth());
