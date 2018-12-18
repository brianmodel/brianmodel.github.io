window.onload = function() {
  let nameStr = "Hi, I'm Brian Model.";
  for (var i = 0; i < nameStr.length; i++) {
    setTimeout(function() {
      document.getElementById('name').textContent = nameStr.substr(0, document.getElementById('name').textContent.length + 1);
    }, 200 + i * 90);
  }
};

$(document).ready(function() {

  $("#aboutbutton").click(function() {
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    }, 500);
  });

  $("#resumebutton").click(function() {
    $('html,body').animate({
      scrollTop: $("#resume").offset().top
    }, 500);
  });

  $("#contactbutton").click(function() {
    $('html,body').animate({
      scrollTop: $("#contact").offset().top
    }, 500);
  });

})
