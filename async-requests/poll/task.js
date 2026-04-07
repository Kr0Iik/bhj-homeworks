let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

// 1. Получаем данные опроса
fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(poll => {
    let { title, answers } = poll.data;

    // 2. Отображаем вопрос
    pollTitle.textContent = title;

    // 3. Отображаем варианты ответов
    answers.forEach(answer => {
      let button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;

      // 4. Добавляем обработчик события
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос принят!');
      });

      pollAnswers.appendChild(button);
    });
  })
  .catch(error => console.error('Ошибка загрузки опроса:', error));
