let timer = document.getElementById("timer");
let timerNumber = Number(timer.textContent);


let time = setInterval(() => {
  if(timerNumber != 0) {
    timerNumber--;
    timer.textContent = timerNumber
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(time);
  }
}, 1000)
