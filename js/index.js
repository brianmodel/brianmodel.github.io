window.onload = function() {
  let nameStr = "Hi, I'm Brian Model.";
  for (var i = 0; i < nameStr.length; i++) {
    setTimeout(function() {
      document.getElementById('name').textContent = nameStr.substr(0, document.getElementById('name').textContent.length + 1);
    }, 200 + i * 90);
  }
}
