// const jwt = require("jsonwebtoken");

// require("dotenv").config();
// const { SECRET_KEY } = process.env;

// const payload = { id: "6425881b0d19cffb389ec3db" };

// const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
// // console.log(token);

// const decodeToken = jwt.decode(token);
// // console.log(decodeToken);

// try {
//   const result = jwt.verify(token, SECRET_KEY);
//   // const result = jwt.verify(token.slice(0, -1), SECRET_KEY);
//   console.log(result);
// } catch (error) {
//   console.log(error.message);
// }

const jwt = require("jsonwebtoken");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const payload = { id: "642ab65e0ee81b59e785dcf2" };

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2d" });

const decodeToken = jwt.decode(token);

// console.log(token);
// console.log(decodeToken);
try {
  // const result = jwt.verify(token.slice(0, -1), SECRET_KEY);
  const result = jwt.verify(token, SECRET_KEY);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
