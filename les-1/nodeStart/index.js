const calculateFullYear = () => {
  const date = new Date();
  return `Now is ${date.getFullYear()} year.`;
};

console.log(calculateFullYear());
