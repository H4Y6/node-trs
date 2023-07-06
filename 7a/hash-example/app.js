const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  // const result = await bcrypt.hash(password, salt);
  const result = await bcrypt.hash(password, salt);
  // console.log(salt);
  // console.log(result);
  const compareResult = await bcrypt.compare("123456", result);
  console.log(compareResult);
};

hashPassword("123456");
