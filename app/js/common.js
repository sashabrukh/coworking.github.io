// TEAM ACCO

const accoTeam = document.getElementsByClassName('accordeon-team__desc-people');

for (let i = 0; i < accoTeam.length; i++) {
  accoTeam[i].addEventListener('click', function() {
    let activeClass = this.classList.contains('accordeon-team__desc-people--active');
    if (!activeClass) {
      this.classList.add('accordeon-team__desc-people--active');
    }
    if (activeClass) {
      this.classList.remove('accordeon-team__desc-people--active');
    }
  });
}

// MENU ACCO

const accoMenuBtn = document.getElementsByClassName('accordeon-menu__list-btn');
const accoMenuDesc = document.getElementsByClassName('accordeon-menu__hidden-desc');

for (let i = 0; i < accoMenuBtn.length; i++) {
  accoMenuBtn[i].addEventListener('click', function() {
    for (let y = 0; y < accoMenuDesc.length; y++) {
      let activeClass = accoMenuDesc[y].classList.contains('accordeon-menu__hidden-desc--active')
      if (!activeClass) {
        accoMenuDesc[y].classList.add('accordeon-menu__hidden-desc--active');
      }
      if (activeClass) {
        accoMenuDesc[y].classList.remove('accordeon-menu__hidden-desc--active');
      }
    }
  });
}

// BURGER MENU

const sliderMenu = document.querySelector('carousel-burgers__menu');
const sliderMenuDesc = document.querySelector('carousel-burgers__menu-list');
const minOp = 0;
const maxOp = 1;
const stepOp = 1;
let currentOp = 0;


  sliderMenu.addEventListener('click', function () {
    if (currentOp < maxOp) {
      currentOp += stepOp;
      sliderMenuDesc.style.opacity = currentOp;
    } else {
      sliderMenuDesc.style.opacity = 1;
    }
  });


// SLIDER

const burgerLeft = document.querySelector('.carousel-burgers__btn--prev');
const bergerRight = document.querySelector('.carousel-burgers__btn--next');
const burgerSlider = document.querySelector('.best-burgers__container');
const minRight = 0;
const maxRight = 5500;
const step = 1100;
let currentRight = 0;

burgerRight.addEventListener('click', function (e) {

  if (currentRight < maxRight) {
    currentRight += step;
    burgerSlider.style.right = currentRight + 'px';
  }
});

burgerLeft.addEventListener('click', function (e) {

  if (currentRight > minRight) {
    currentRight -= step;
    burgerSlider.style.right = currentRight + 'px';
  }
});