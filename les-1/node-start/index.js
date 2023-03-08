const getCurrentTime = () => {
  const date = new Date();
  return date.toString().slice(0, 25);
};
const calculateFullYear = () => {
  const date = new Date();
  return `Now is ${date.getFullYear()}.\n`;
};

const currentTime = document.getElementById("time");
currentTime.innerHTML = getCurrentTime();
currentTime.style.textAlign = "center";

const year = document.getElementById("year");
year.innerHTML = calculateFullYear();
year.style.textAlign = "center";
console.log(calculateFullYear(), getCurrentTime());
