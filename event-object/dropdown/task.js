let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  let dropdownValue = dropdown.querySelector('.dropdown__value');
  let dropdownList = dropdown.querySelector('.dropdown__list');
  let dropdownItems = dropdown.querySelectorAll('.dropdown__item');

  dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      let parentDropdown = item.closest('.dropdown');
      let valueField = parentDropdown.querySelector('.dropdown__value');
    
      valueField.textContent = item.textContent.trim();
      parentDropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    });
  });
});