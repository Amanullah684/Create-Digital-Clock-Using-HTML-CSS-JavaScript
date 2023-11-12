const clockEl = document.querySelector(".clock");
const buttons = document.querySelectorAll(".format button");
setInterval(generateTime, 1000);

function generateTime() {
  const format = clockEl.getAttribute("data-format");
  const date = new Date();
  let hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  let timeStatus = "";

  if (format === "12") {
    hour = hour > 12 ? hour % 12 : hour;
    timeStatus = hour > 11 ? "PM" : "AM";
  } else {
    timeStatus = ""; // No AM/PM for 24-hour format
  }

  // Ensure two-digit formatting for minutes and seconds
  const formattedMin = min < 10 ? "0" + min : min;
  const formattedSec = sec < 10 ? "0" + sec : sec;

  clockEl.innerHTML = `<h1>${hour} : ${formattedMin} : ${formattedSec} ${timeStatus}</h1>`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const format = button.getAttribute("data-format");
    clockEl.setAttribute("data-format", format);
    generateTime();
  });
});
