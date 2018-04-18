;'use strict';

$(document).ready(function () {
  var popup = $('.my-works__contacts-form-popup');
  popup.hide();
  //E-mail Ajax Send
  $("#submit-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../../server.php", //Change
      data: th.serialize()
    }).done(function () {
      popup.show();
      setTimeout(function () {
        popup.hide();
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});