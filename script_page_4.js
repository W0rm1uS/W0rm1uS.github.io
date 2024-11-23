const enLink = document.getElementById('en-link');
const ruLink = document.getElementById('ru-link');

const enTexts = {
    "page4-title": "Page 4 Content",
    "page4-text": "This is the content of Page 4."
};

const ruTexts = {
    "page4-title": "Контент страницы 4",
    "page4-text": "Это контент страницы 4."
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