const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToggle.textContent = 'Toggle Dark Mode';
    } else {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Toggle Light Mode';
    }
});
