const date = new Date();
// const getCurrentTime = () => {
//   const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
//   return currentTime;
// };

// const getCurrentDate = () => {
//   const currentDate = `${date.getDate()}.${
//     date.getMonth() + 1
//   }.${date.getFullYear()}`;
//   return currentDate;
// };

getCurrentMoment = () => {
  const currentMoment = date.toString().slice(0, 25);
  return currentMoment;
};
// document.getElementById("time").innerHTML = "Time is: " + getCurrentTime();
// document.getElementById("date").innerHTML = "Today is: " + getCurrentDate();
const now = document.getElementById("moment");
now.innerHTML = getCurrentMoment();
now.style.textAlign = "center";

console.log(getCurrentTime(), getCurrentDate());
