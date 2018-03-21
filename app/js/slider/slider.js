var slider = (function () {
  var counter = 1,
      duration = 300,
      inProcess = false;

  var moveSlide = function (container, direction) {

    var items = $('.js-slider-item', container),
        activeItem = items.filter('.active'),
        direction = direction === 'down' ? 100 : -100;

    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    activeItem.animate({
      'top': direction + '%'
    }, duration, function () {
    });

    reqItem.animate({
      'top': '0'
    }, duration, function () {
      activeItem.removeClass('active').css('top', '-' + direction + '%');
      $(this).addClass('active');
      inProcess = false;
    });

  };

  return{
    init: function () {
      $('.js-slider-down, .js-slider-up').on('click', function (e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.slider-js-left'), 'up' );
          moveSlide($('.slider-js-right'), 'down' );
          counter++;
        }
      });
    }
  }

})();

$(function () {
  slider.init();
});