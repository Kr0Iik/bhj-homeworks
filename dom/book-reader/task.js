let book = document.querySelector('.book');
let fontSize = document.querySelectorAll('.font-size');
window.addEventListener('click', (event) => {
  let target = event.target;
  if(target.classList[0] == 'font-size') {
    for (let i = 0; i < fontSize.length; i++) {
      fontSize[i].classList.remove('font-size_active');
    }
    target.classList.add('font-size_active');
  }
  if(target.classList[1] == 'font-size_small'){
    book.className = 'book';
    book.classList.add('book_fs-small');
  }
  if(target.classList[1] == 'font-size_big'){
    book.className = 'book';
    book.classList.add('book_fs-big');
  }
  if(target.classList[1] == 'font-size_active') {
    book.className = 'book';
  }
})