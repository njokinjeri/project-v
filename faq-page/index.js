const buttons = document.querySelectorAll('.faq-nav button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

const faqButtons = document.querySelectorAll('.faq-items button');

faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const content = document.getElementById(button.getAttribute('aria-controls'));

        faqButtons.forEach((btn) => {
            btn.setAttribute('aria-expanded', 'false');
            document.getElementById(btn.getAttribute('aria-controls')).hidden = true;
        });

        if(!expanded) {
            button.setAttribute('aria-expanded', 'true');
            content.hidden = false;
        }
    });
});