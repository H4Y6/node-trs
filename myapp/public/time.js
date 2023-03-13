function getTime() {
  const time = new Date().toString().slice(0, 25);
  const timeRef = document.querySelector(".time");
  timeRef.innerHTML = time;
}
