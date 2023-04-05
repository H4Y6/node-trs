const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  //   console.log(salt);
  const result = await bcrypt.hash(password, 10);
  //   console.log(result);
  const compareResult = await bcrypt.compare("123456", result);
  //   console.log(compareResult);
};

hashPassword("123456");
