var songList = document.getElementById('songList')
var mainContentElement = document.getElementById('mainContent');
var addSongsElement = document.getElementById('addSongs');
var artistEl= document.getElementById('artist');
var songEl= document.getElementById('song');
var albumEl= document.getElementById('album');
var songAddBtn = document.getElementById('songAddBtn');

// when app first loads, hides the addSongs element and displays the main content.

$(document).ready(function() {
  mainContentElement.setAttribute("style", "display: flex");
  addSongsElement.setAttribute("style", "display:none");
});

// when Add Music button is pressed, hides main content area of page and shows Add Songs element.

$("#addBtn").click(function() {
  mainContentElement.setAttribute("style", "display: none;");
  addSongsElement.setAttribute("style", "display: block");
});

// when List Music is pressed, hides the Add Songs element and displays Main Content area.

$("#listBtn").click(  function() {
  mainContentElement.setAttribute("style", "display: flex");
  addSongsElement.setAttribute("style", "display:none");
});

// Removes Song if delete button is pressed.

$(".songList").click(function(event) {
  if (event.target.classList.contains("delBtn")){ 
    event.target.parentNode.remove();
  };
});

// function to add new song through 'Add Music' section of app.

$("#songAddBtn").click(function() {
  var newSong = "";
  newSong += `<div class="song" style="min-height: 90px;">`;
  newSong += `<a href="#">${songEl.value}</a>`;
  newSong += `<button class="delBtn" type="">X</button>`;
  newSong += `<ul class="songInfo"`;
  newSong += `<li>${artistEl.value}</li>`;
  newSong += `<li class="songMid">${albumEl.value}</li>`;
  newSong += `</ul>`;
  newSong += `</div>`;
  songList.innerHTML += newSong;
});

// Gets contents of song1.json and loads them when starting up app.

$.get('songs1.json', function(songs) {
  for (var i = 0; i < songs.songs.length; i++) {
    $("#songList")
     .append(`<div class="song" style="min-height: 90px;"><a href="#">${songs.songs[i].title}</a><button class="delBtn" type="">X</button><ul class="songInfo"<li>Artist: ${songs.songs[i].artist}</li><li>Album:${songs.songs[i].album}</li></ul></div>`);
  }
}, "json");

// waiting to fix flexbox before tackling the step where i add the second json file on click
// $.get('songs2.json');
