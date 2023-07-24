const isLeapYear = (year) => {
  if (year === undefined) {
    throw new Error("year must exist");
  }
  if (typeof year !== "number") {
    throw new Error("year must be number");
  }
  if (!Number.isInteger(year)) {
    throw new Error("year must be integer");
  }
  if (year < 42) {
    throw new Error("year must be 42 or more");
  }

  const date = new Date(year, 1, 29);
  const monthDate = date.getDate();
  return monthDate === 29;
};

module.exports = isLeapYear;
