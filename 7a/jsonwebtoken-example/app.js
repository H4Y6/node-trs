const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const payload = { id: "64a6cf9b83153bc0ed6541cb" };

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
  const result = jwt.verify(token.slice(0, -1), SECRET_KEY);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
