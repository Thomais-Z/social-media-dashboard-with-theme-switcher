const bodyBg = document.querySelector('body');
const switchBtn = document.querySelector('.switch');
const mainh4s = document.querySelectorAll('.main-h4');
const overviewTitle = document.querySelector('.overview-title');
const socialMediaCards = document.querySelectorAll('.social-media-box');
const mainh2 = document.querySelectorAll('.main-h2');
const mainh4 = document.querySelectorAll('.social-media-h1');
const overviewBox = document.querySelectorAll('.overview-box');
const names = document.querySelectorAll('.name');

switchBtn.addEventListener('click', () => {
  bodyBg.classList.toggle('dark-mode-bg');
  overviewTitle.classList.toggle('dark-mode-text');
  switchBtn.classList.toggle('dark-mode-switch');
  for (let i = 0; i < socialMediaCards.length; i++) {
    socialMediaCards[i].classList.toggle('dark-mode-card');
  }
  for (let i = 0; i < overviewBox.length; i++) {
    overviewBox[i].classList.toggle('dark-mode-card');
  }
  for (let i = 0; i < mainh2.length; i++) {
    mainh2[i].classList.toggle('dark-mode-text');
  }
  for (let i = 0; i < mainh4.length; i++) {
    mainh4[i].classList.toggle('dark-mode-text');
  }
  for (let i = 0; i < mainh4s.length; i++) {
    mainh4s[i].classList.toggle('dark-mode-p');
  }
  for (let i = 0; i < names.length; i++) {
    names[i].classList.toggle('dark-mode-p');
  }
});
