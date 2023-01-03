const getCurrentTime = () => {
  const today = new Date().toString().slice(0, 25);
  console.log(`Current time: ${today}`);
};

module.exports = getCurrentTime;
