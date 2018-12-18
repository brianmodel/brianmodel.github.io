window.onload = function() {
  let nameStr = "Hi, I'm Brian Model.";
  for (var i = 0; i < nameStr.length; i++) {
    setTimeout(function() {
      document.getElementById('name').textContent = nameStr.substr(0, document.getElementById('name').textContent.length + 1);
    }, 200 + i * 90);
  }
};

$(document).ready(function() {

  $("#homebutton").click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });

  $("#aboutbutton").click(function() {
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    }, 500);
  });
})
