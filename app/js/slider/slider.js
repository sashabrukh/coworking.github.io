var slider = (function () {
  var counter = 1,
      counterMain = 1,
      duration = 300,
      inProcess = false,
      currentSlide = 0,
      img = $('.js-slider-img'),
      h2 = $('.my-works__works-name'),
      text = $('.my-works__works-tech-item');

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
      tags: ['js', 'css']
    },

    {
      title: 'Lending 3',
      image: 'slide-3.jpg',
      description: 'Описание 3',
      tags: ['html', 'pug']
    },

    {
      title: 'Lending 4',
      image: 'slide-4.jpg',
      description: 'Описание 4',
      tags: ['vue', 'pug']
    },

    {
      title: 'Lending 5',
      image: 'slide-5.jpg',
      description: 'Описание 5',
      tags: ['node', 'pug']
    }
  ];

  var moveSlide = function (container, direction) {

    var items = $('.js-slider-item', container),
        activeItem = items.filter('.active');

    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    if (direction === 'down') {
      img.attr('src', slides[counter].image);
      h2.text(slides[counter].title);
      text.text(slides[counter].tags);
      activeItem.animate({
        'top': '100%'
      }, duration, function () {

      });

      reqItem.animate({
        'top': '0'
      }, duration, function () {
        activeItem.removeClass('active').css('top', '-100%');
        $(this).addClass('active');
        inProcess = false;
      });
    }
    if (direction === 'up') {
      activeItem.animate({
        'top': '-100%'
      }, duration
      );

      reqItem.animate({
        'top': '0'
      }, duration, function () {
        activeItem.removeClass('active').css('top', '100%');
        $(this).addClass('active');
        inProcess = false;
      });
    }
    if (direction === 'right') {
      activeItem.animate({
        'left': '100%'
      }, duration
      );

      reqItem.animate({
        'left': '0'
      }, duration, function () {
        activeItem.removeClass('active').css('left', '-100%');
        $(this).addClass('active');
        inProcess = false;
      });
    }
    if (direction === 'left') {
      activeItem.animate({
          'left': '-100%'
        }, duration
      );

      reqItem.animate({
        'left': '0'
      }, duration, function () {
        activeItem.removeClass('active').css('left', '100%');
        $(this).addClass('active');
        inProcess = false;
      });
    }

  };

  return{
    init: function () {
      $('.js-slider-up').on('click', function (e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.slider-js-right'), 'down');
          moveSlide($('.slider-js-left'), 'up');
          moveSlide($('.js-slider-main'), 'right');
          counter++;
        }
      });
      $('.js-slider-down').on('click', function (e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.slider-js-right'), 'up');
          moveSlide($('.slider-js-left'), 'down');
          moveSlide($('.js-slider-main'), 'left');
          counter++;
        }
      })
    }
  }

})();

$(function () {
  slider.init();
});