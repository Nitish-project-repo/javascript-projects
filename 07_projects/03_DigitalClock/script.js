// const date = new Date();

// console.log(date);

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

const displayTime = document.querySelector(".display");

setInterval(() => {
  const date = new Date();

  const localTime = date.toLocaleTimeString();

  // console.log(localTime);
  // console.log(typeof localTime);
  displayTime.textContent = localTime;
}, 1000);
