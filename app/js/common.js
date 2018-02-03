// MOBILE MENU

const mobileMenuCheck = document.querySelector('#checkbox');
const mobileMenuCont = document.querySelector('#mobile-cont');

mobileMenuCheck.addEventListener('click', function () {
  let activeClass = mobileMenuCont.classList.contains('mobile-menu-container--active');
  if (!activeClass) {
    mobileMenuCont.classList.add('mobile-menu-container--active');
    document.body.style.overflow = 'hidden';
  }
  if (activeClass) {
    mobileMenuCont.classList.remove('mobile-menu-container--active');
    document.body.style.overflow = 'auto';
  }
});

// TEAM ACCO

const accoTeam = document.getElementsByClassName('accordeon-team__desc-people');

for (let i = 0; i < accoTeam.length; i++) {
  accoTeam[i].addEventListener('click', function () {
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
  accoMenuBtn[i].addEventListener('click', function () {
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

const burgerMenu = document.querySelector('#burger-menu');
const burgerMenuList = document.querySelector('#burger-list');
let burgerOp = burgerMenuList.style.opacity;
let computedStyle = getComputedStyle(burgerMenuList);
let maxOp = 1;

burgerMenu.addEventListener('click', function () {
  if (computedStyle.opacity < maxOp) {
    burgerMenuList.style.opacity += 1;
  }
  else {
    burgerMenuList.style.opacity -= 1;
  }

});


// SLIDER

const sliderLeft = document.querySelector('#carousel-prev');
const sliderRight = document.querySelector('#carousel-next');
const slider = document.querySelector('#burger-container');
const minRight = 0;
const maxRight = 5500;
const step = 1100;
let currentRight = 0;

sliderRight.addEventListener('click', function (e) {

  if (currentRight < maxRight) {
    currentRight += step;
    slider.style.right = currentRight + 'px';
  }
});

sliderLeft.addEventListener('click', function (e) {

  if (currentRight > minRight) {
    currentRight -= step;
    slider.style.right = currentRight + 'px';
  }
});