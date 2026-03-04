let killMole = document.getElementById("dead");
let miss = document.getElementById("lost");

document.addEventListener('click', (event) => {
  let element = event.target;

  if(Number(killMole.textContent) == 9) {
    alert("Победа");
    location.reload();
  }

  if(Number(miss.textContent) == 4) {
    alert("Поражение");
    location.reload();
  }

  if(element.classList[1] == "hole_has-mole") {
    killMole.textContent = Number(killMole.textContent) + 1
  } else if (element.classList[1] == undefined) {
    miss.textContent = Number(miss.textContent) + 1
  }
});
