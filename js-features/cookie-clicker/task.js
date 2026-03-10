let cooki = document.querySelector(".clicker__cookie");
let clickerCounter = document.getElementById("clicker__counter");
let clickerSpeed = document.getElementById("clicker__speed");
let lastClickTime = new Date(); 

cooki.onclick = function () {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    let currentTime = new Date();
    let diffInSeconds = (currentTime - lastClickTime) / 1000;

    if (diffInSeconds > 0) {
        let speed = 1 / diffInSeconds;
        clickerSpeed.textContent = speed.toFixed(2);
    }

    lastClickTime = currentTime;
}