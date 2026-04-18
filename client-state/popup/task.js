let modal = document.getElementById('subscribe-modal');
let closeBtn = modal.querySelector('.modal__close');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
if (getCookie('modal_closed') !== 'true') {
    modal.classList.add('modal_active');
}

closeBtn.onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = "modal_closed=true";
};
