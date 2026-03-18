let dropdown = document.querySelector('.dropdown');
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItems = document.querySelectorAll('.dropdown__item');

dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownValue.textContent = item.childNodes[1].textContent;
  });
});