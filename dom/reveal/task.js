let reveal = document.querySelector('.reveal');
setInterval(() => {
  if(reveal.getBoundingClientRect().y < window.innerHeight && reveal.getBoundingClientRect().y > 0){
    reveal.classList.add('reveal_active');
  } else reveal.classList.remove('reveal_active')
}, 100)
