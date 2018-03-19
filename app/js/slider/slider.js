var slides = [
  {
    title: 'Lending 1',
    image: 'slide-1.jpg',
    description: 'Описание 1',
    tags: ['js', 'pug']
  },

  {
    title: 'Lending 2',
    image: 'slide-2.jpg',
    description: 'Описание 2',
    tags: ['js', 'pug']
  },

  {
    title: 'Lending 3',
    image: 'slide-3.jpg',
    description: 'Описание 3',
    tags: ['js', 'pug']
  },

  {
    title: 'Lending 4',
    image: 'slide-4.jpg',
    description: 'Описание 4',
    tags: ['js', 'pug']
  }
];

var slider = document.querySelector('.js-slider'),
  mainSlide = slider.querySelector('.js-main-slide'),
  upSlide = slider.querySelector('.js-scroll-up'),
  downSlide = slider.querySelector('.js-scroll-down'),
  description = slider.querySelector('.js-description'),
  currentSlide = 0,
  slidesLength = slides.length;

upSlide.addEventListener('click', function() {
  currentSlide = slideLimiter(currentSlide + 1);
  fillSlider();
});

downSlide.addEventListener('click', function() {
  currentSlide = slideLimiter(currentSlide - 1);
  fillSlider();
});

function fillSlider() {
  var prev = slideLimiter(currentSlide - 1),
    next = slideLimiter(currentSlide + 1);

  mainSlide.innerText = slides[currentSlide].title;
  upSlide.innerText = slides[prev].title;
  downSlide.innerText = slides[next].title;
  description.innerText = slides[currentSlide].description;
}

function slideLimiter(value) {
  if (value >= slidesLength) {
    return 0;
  } else if (value < 0) {
    return slidesLength - 1;
  } else {
    return value;
  }
}

fillSlider();

// var img = document.createElement('img');
// img.setAttribute('src', slides[0].image);
// mainSlide.appendChild(img);