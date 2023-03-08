const getCurrentTime = () => {
  const date = new Date();
  return date.toString().slice(0, 25);
};
const calculateFullYear = () => {
  const date = new Date();
  return `Now is ${date.getFullYear()}. <br>\n`;
};

const currentMoment = document.getElementById("time");
currentMoment.innerHTML = calculateFullYear() + getCurrentTime();
currentMoment.style.textAlign = "center";

console.log(calculateFullYear(), getCurrentTime());
