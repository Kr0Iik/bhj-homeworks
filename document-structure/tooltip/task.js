let links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let activeTooltip = link.querySelector('.tooltip_active');

        let allTooltips = document.querySelectorAll('.tooltip');
        allTooltips.forEach(t => t.remove());

        if (activeTooltip) {
            return;
        }
        let tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.innerText = link.getAttribute('title');
        document.body.appendChild(tooltip);

        let { left, bottom } = link.getBoundingClientRect();
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${bottom + window.scrollY}px`;
    });
});
