var addBtn = document.getElementById('addBtn');
var listBtn = document.getElementById('listBtn');
var songList = document.getElementById('songList')
var mainContentElement = document.getElementById('mainContent');
var addSongsElement = document.getElementById('addSongs');
var artistEl= document.getElementById('artist');
var songEl= document.getElementById('song');
var albumEl= document.getElementById('album');
var songAddBtn = document.getElementById('songAddBtn');

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

songAddBtn.addEventListener("click", function() {

  var newSong = "";
  newSong += `<div class="song">`;
  newSong += `<a href="#">${songEl.value}</a>`;
  newSong += `<ul class="songInfo"`;
  newSong += `<li>${artistEl.value}</li>`;
  newSong += `<li class="songMid">${albumEl.value}</li>`;
  newSong += `</ul>`;
  newSong += `</div>`;
  songList.innerHTML += newSong;

});

/*<div class="song">
            <a href="#">Song Name</a>
            <ul class="songInfo">
              <li>Artist Name</li>
              <li class="songMid">Album Name</li>
              <li>Genre</li>
            </ul>
          </div> */