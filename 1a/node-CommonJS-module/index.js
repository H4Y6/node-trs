const users = require("./users");
// const admins = require("./users").admins;
const admins = users.admins;
// const { admins } = require("./users");

// const thisMonth = require("./date").getCurrentMonth();
const { getCurrentMonth } = require("./date");
// const currentMonth = require("./date").getCurrentMonth();

console.log(users);
console.log(admins);
console.log(getCurrentMonth());
