const scrollToFormButton = document.getElementById('scrollToForm');
const formSection = document.querySelector('.form');

scrollToFormButton.addEventListener('click', () => {
    formSection.scrollIntoView({ behavior: 'smooth' });
});
