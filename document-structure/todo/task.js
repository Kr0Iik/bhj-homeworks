const tasksForm = document.getElementById('tasks__form');
const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = tasksInput.value.trim();

    if (title.length > 0) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        taskElement.innerHTML = `
            <div class="task__title">
                ${title}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;

        const removeBtn = taskElement.querySelector('.task__remove');
        removeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            taskElement.remove();
        });

        tasksList.appendChild(taskElement);

        tasksInput.value = '';
    }
});
