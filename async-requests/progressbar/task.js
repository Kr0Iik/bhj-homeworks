let form = document.getElementById('form');
let progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    });

    xhr.upload.addEventListener('load', () => {
        console.log('Загрузка завершена');
    });

    xhr.open('POST', form.getAttribute('action'));
    xhr.send(formData);
});
