let editor = document.getElementById('editor');
editor.value = localStorage.getItem('editor_text') || '';
editor.addEventListener('input', () => {
  localStorage.setItem('editor_text', editor.value);
});