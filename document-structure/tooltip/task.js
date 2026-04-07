let hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach(element => {
    element.onclick = function(event) {
        event.preventDefault();
        
        const existingTooltip = element.querySelector('.tooltip_active');
        
        // Сначала удаляем ВСЕ активные подсказки на странице (чтобы была только одна)
        const allActiveTooltips = document.querySelectorAll('.tooltip_active');
        allActiveTooltips.forEach(t => t.remove());

        // Если подсказка не была открыта именно на этом элементе — создаем её
        if (!existingTooltip) {
            const tooltipText = element.getAttribute('title');
            
            // Создаем элемент подсказки
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip tooltip_active';
            tooltipElement.innerText = tooltipText;

            // Добавляем в DOM, чтобы вычислить размеры
            document.body.appendChild(tooltipElement);

            // Позиционируем относительно элемента
            const { left, bottom } = element.getBoundingClientRect();
            
            tooltipElement.style.left = `${left}px`;
            tooltipElement.style.top = `${bottom}px`;
        }
    };
});