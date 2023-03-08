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
currentMoment.style.cssText = "background: lightBlue; text-align: center";

const flower = document.querySelector(".flower");
flower.style.cssText = "background: lightBlue; text-align: center";

console.log(calculateFullYear(), getCurrentTime());
