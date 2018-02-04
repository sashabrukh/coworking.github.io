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
      let activeClass = accoMenuDesc[i].classList.contains('accordeon-menu__hidden-desc--active');
      if (!activeClass) {
        accoMenuDesc[i].classList.add('accordeon-menu__hidden-desc--active');
      }
      if (activeClass) {
        accoMenuDesc[i].classList.remove('accordeon-menu__hidden-desc--active');
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
  } else {
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

// MAPS

ymaps.ready(init);

let placemarks = [
  {
    latitude: 59.97,
    longitude: 30.31,
    hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
      'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
      '</div>'
    ]
  },
  {
    latitude: 59.94,
    longitude: 30.25,
    hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
      'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
      '</div>'
    ]
  },
  {
    latitude: 59.93,
    longitude: 30.34,
    hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
      'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
      '</div>'
    ]
  }
],
  geoObjects = [];

function init() {
  const map = new ymaps.Map('map', {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  for (let i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent.join('')
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/forsprite/svg/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      });
  }

  const clusterer = new ymaps.Clusterer({
    clusterIcons: [
      {
        href: '../img/forsprite/png/burger-promo.png',
        size: [100, 100],
        offset: [-50, -50]
      }
    ],
    clusterIconContentLayout: null
  });

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}