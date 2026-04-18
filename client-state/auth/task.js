const signinForm = document.getElementById('signin__form');
const signinBlock = document.getElementById('signin');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

function showWelcome(userId) {
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
    userIdSpan.textContent = userId;
}

const savedUserId = localStorage.getItem('user_id');
if (savedUserId) {
    showWelcome(savedUserId);
}

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(signinForm);
    
    fetch(signinForm.getAttribute('action'), {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('user_id', data.user_id);
            showWelcome(data.user_id);
            signinForm.reset();
        } else {
            alert('Неверный логин/пароль');
            signinForm.reset();
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    });
});
