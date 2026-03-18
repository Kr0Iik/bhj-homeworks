let rotatorCase = document.querySelectorAll('.rotator__case');
let index = 0;
setInterval(() => {
  if(index != 5) {
    rotatorCase[index].classList.remove('rotator__case_active');
    rotatorCase[index + 1].classList.add('rotator__case_active');
    index++;
    
  } else {
    rotatorCase[index].classList.remove('rotator__case_active');
    index = 0;
    rotatorCase[index].classList.add('rotator__case_active');
  }
}, 1000)