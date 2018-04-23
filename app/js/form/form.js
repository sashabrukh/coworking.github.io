;'use strict';

$(document).ready(function () {
  var popup = $('.my-works__contacts-form-popup');
  var popupFunc = function () {
    popup.fadeTo("slow", 0, function () {
      $(this).fadeTo('slow', 1).after(function () {
        setTimeout(() => {
          $(this).fadeTo('slow', 0)
        }, 3000);
      })
    });
  }
  //E-mail Ajax Send
  $("#submit-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "server.php", //Change
      data: th.serialize()
    }).done(function () {
      popupFunc();
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});