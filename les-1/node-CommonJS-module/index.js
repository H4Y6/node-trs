const users = require("./users");
const admins = require("./users").admins;
// const { admins } = require("./users");
const { clients } = require("./users");
// const { getCurrentMonth } = require("./date");
const currentMonth = `Current month is: ${require("./date").getCurrentMonth()}`;
const isLeapYear = require("./date");

console.log(admins);
console.log(users);
console.log({
  admins,
  clients,
});
// console.log(getCurrentMonth());
console.log(currentMonth);
// console.log(`Current month is: ${currentMonth}`);
