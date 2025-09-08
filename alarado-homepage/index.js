// dark-mode
const toggleMode = document.getElementById('modeToggle');

toggleMode.addEventListener('change', () => {
    document.body.classList.toggle("dark");
});

