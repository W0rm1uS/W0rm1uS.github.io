const enLink = document.getElementById('en-link');
const ruLink = document.getElementById('ru-link');
const greeting = document.getElementById('greeting');
const intro = document.getElementById('intro');
const portfolio = document.getElementById('portfolio');
const goodluck = document.getElementById('goodluck');

document.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.querySelector('main');
    mainElement.classList.add('fadeIn');
  });

const enTexts = {
    greeting: "Hello, Internet traveler!",
    intro: "I'm Wormius, I'm a beginner developer!",
    portfolio: "And this site is my portfolio! I created it to track my progress and just to save my memorable events!",
    goodluck: "!Good luck!"
};

const ruTexts = {
    greeting: "Привет, путешественник интернета!",
    intro: "Я Wormius, я начинающий разработчик!",
    portfolio: "А это мой портфолио! Я создал его, чтобы отслеживать свой прогресс и просто сохранять свои запоминающиеся события!",
    goodluck: "!Удачи!"
};

let currentLang = 'en';

function switchLang(lang) {
    currentLang = lang;
    const texts = currentLang === 'en' ? enTexts : ruTexts;
    greeting.textContent = texts.greeting;
    intro.textContent = texts.intro;
    portfolio.textContent = texts.portfolio;
    goodluck.textContent = texts.goodluck;
}

enLink.addEventListener('click', () => switchLang('en'));
ruLink.addEventListener('click', () => switchLang('ru'));