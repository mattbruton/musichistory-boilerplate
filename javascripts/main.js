"use strict";


let views = require('./views.js');

let songHolder = [];

$(document).ready(function() {

// Variables to be used later in file

  let addSongs = $("#addSongs");
  let songList = $("#songList");
  let albumField = $("#album");
  let artistField = $("#artist");
  let songField = $("#song");
  let songAddBtn = $("#songAddBtn");

/* When new json files are loaded, their contents are given an id and pushed into the song holder array and then the append function is run to populate the DOM. */

  let pushSongs = (songs) => {
    songs.songs.forEach(function(i) {
      i.id = songList.length++;
      songHolder.push(i);
    });
    appendSongs();
  };

// function that is responsible for appending each item in songHolder array to the DOM. clears the DOM and then 
// populates with current array.

  let appendSongs = () => {
    songList.html("");
    songHolder.forEach(function(i){
      songList.append(`<div id="${i.id}"><h1>${i.title}</h1><ul><li>Album: ${i.album}</li><li>Artist: ${i.artist}</li></ul><button type="" class="del">Remove</button></div>`);
    });
  };

/* On page load, ListMusicView is shown */

  views.listMusicView();

  /* function to delete songs -- upon clicking the delete button within any song, if the id of the parent of the button equals the id key in the songHolder array, it removes that item from the array. then appends the newly modified array back into the DOM. */

  songList.click(function(e) {
    if(e.target.classList == "del") {
      for(var i = 0; i < songHolder.length; i++) {
        if(songHolder[i].id == e.target.parentNode.id) {
          songHolder.splice(i, 1);
        }
      }
      appendSongs();
    }
  });


$("#songAddBtn").click(function() {
    songHolder.push({
      artist: `${$('#artist').val()}`,
      title: `${$('#song').val()}`,
      album: `${$('#album').val()}`,
      id: `${songList.length++}`
    });
    artistField.val("");
    songField.val("");
    albumField.val("");
    appendSongs();
  });

/* Event listeners for View functions above */
  

  $("#addMusicBtn").click(function() {
    views.addMusicView();
  });


  $("#listMusicBtn").click(function() {
    views.listMusicView();
  });


  $("#addMore").click(function(){
    $.ajax({
      url: "songs2.json",
      success: pushSongs
    });
    $("#addMore").hide();
  });

  
  $.ajax({
    url: "songs1.json",
    success: pushSongs
  });

});

module.exports = {
  songHolder
};