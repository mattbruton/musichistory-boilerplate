var addBtn = document.getElementById('addBtn');
var listBtn = document.getElementById('listBtn');
var mainContentElement = document.getElementById('mainContent');
var addSongsElement = document.getElementById('addSongs');

window.addEventListener("load", function() {
  mainContentElement.setAttribute("style", "display: flex");
  addSongsElement.setAttribute("style", "display:none");
});


addBtn.addEventListener("click", function() {
  mainContentElement.setAttribute("style", "display: none;");
  addSongsElement.setAttribute("style", "display: block");
});


listBtn.addEventListener("click", function() {
  mainContentElement.setAttribute("style", "display: flex");
  addSongsElement.setAttribute("style", "display:none");
});
