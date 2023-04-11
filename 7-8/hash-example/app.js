const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  // const result = (await bcrypt.hash(password, 10)).slice(0, -1);
  const result = await bcrypt.hash(password, 10);
  const compareResult = await bcrypt.compare("123456", result);
  console.log(salt);
  console.log(result);
  console.log(compareResult);
};
hashPassword("123456");
