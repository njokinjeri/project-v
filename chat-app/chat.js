const form = document.querySelector('.message-form');
const textarea = document.querySelector('#message-box');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    textarea.value = '';
    textarea.focus();
    form.classList.add('sent');

    setTimeout(() => {
        form.classList.remove('sent');
        console.log('Next message please!')
    }, 1000)
});
