const bcrypt = require("bcryptjs");

const hashPassport = async (password) => {
  const salt = await bcrypt.genSalt(10);
  //   console.log(salt);
  const result = await bcrypt.hash(password, 10);
  //   console.log(result);
  const compareResult = await bcrypt.compare("123456", result);
  //   console.log(compareResult);
};

hashPassport("123456");
