var slider = (function () {
  var counter = 1,
      duration = 300,
      inProcess = false;

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

  var moveSlide = function (container, direction) {

    var items = $('.js-slider-item', container),
        activeItem = items.filter('.active');

    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    if (direction === 'down') {
      var desc = $('.js-slider-desc');
      var img = $('<img />').attr('src', slides[0].image);
      var h2 = $('.my-works__works-name');
      var text = $('.my-works__works-tech-item');
      desc.append(img);
      h2.text(slides[0].title);
      text.text(slides[0].tags);
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

  };

  return{
    init: function () {
      $('.js-slider-down, .js-slider-up').on('click', function (e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.slider-js-left'), 'up');
          moveSlide($('.slider-js-right'), 'down');
          moveSlide($('.js-slider-main'), 'right');
          counter++;
        }

      })
    }
  }

})();

$(function () {
  slider.init();
});