const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

const getTime = () => {
  const date = new Date();

  const sec = date.getSeconds();
  const secDegree = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDegree}deg)`;

  const min = date.getMinutes();
  const minDegree = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = date.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(getTime, 1000);
