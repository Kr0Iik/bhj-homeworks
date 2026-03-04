let cooki = document.querySelector(".clicker__cookie");
let clickerCounter = document.getElementById("clicker__counter");
let clickerSpeed = document.getElementById("clicker__speed");
let dateNow = Date.now();
cooki.onclick = function () {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    clickerSpeed.textContent =  ((Date.now() - dateNow) / Number(clickerCounter.textContent)).toFixed(2);
} 