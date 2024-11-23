const enLink = document.getElementById('en-link');
const ruLink = document.getElementById('ru-link');

const enTexts = {
    "page1-title": "Page 1 Content",
    "page1-text": "This is the content of Page 1."
};

const ruTexts = {
    "page1-title": "Контент страницы 1",
    "page1-text": "Это контент страницы 1."
};

let currentLang = 'en';

function switchLang(lang) {
    currentLang = lang;
    const texts = currentLang === 'en' ? enTexts : ruTexts;

    const textElements = document.querySelectorAll('[data-i18n]');
    textElements.forEach(element => {
        const key = element.dataset.i18n;
        if (texts[key]) {
            element.textContent = texts[key];
        }
    });
}

enLink.addEventListener('click', () => switchLang('en'));
ruLink.addEventListener('click', () => switchLang('ru'));

document.addEventListener('DOMContentLoaded', function() {
  const mainElement = document.querySelector('main');
  mainElement.classList.add('fadeIn');
});