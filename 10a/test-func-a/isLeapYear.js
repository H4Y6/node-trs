const isLeapYear = (year) => {
  const date = new Date(year, 2, 0);
  const days = date.getDate();
  return days === 29;
};

module.exports = isLeapYear;
