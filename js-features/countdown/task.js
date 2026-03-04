let timer = document.getElementById("timer");
let timerNumber = Number(timer.textContent);

setInterval(() => {
  if(timerNumber != 0) {
    timerNumber--;
    timer.textContent = timerNumber
  } 
}, 1000)
