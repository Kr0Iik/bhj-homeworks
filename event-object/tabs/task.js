
let tabContainers = document.querySelectorAll('.tabs');

tabContainers.forEach(container => {
    let tabs = container.querySelectorAll('.tab');
    let contents = container.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('tab_active'));
            contents.forEach(c => c.classList.remove('tab__content_active'));
            tab.classList.add('tab_active');
            contents[index].classList.add('tab__content_active');
        });
    });
});