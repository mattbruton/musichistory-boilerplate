"use strict";

  let addSongs = $("#addSongs");
  let yellowDiv = $(".yellowDiv");
  let blueDiv= $(".blueDiv");
  let editSongs = $('#editSongs');

  // CODE FOR VIEW SELECTION

/* List Music View should be the default view for the app, which displays information contained
in JSON files, and an area for user to filter songs based on selected criteria. */

let listMusicView = () => {
    addSongs.hide();
    editSongs.hide();
    blueDiv.show();
    yellowDiv.show();
  };

/* Add Music View should hide all primary content and display a form which the user can utilitze to 
enter new songs into the app. */

let addMusicView = () => {
    editSongs.hide();
    addSongs.show();
    blueDiv.hide();
    yellowDiv.hide();
  };

let editMusicView = () => {
    editSongs.show();
    addSongs.hide();
    blueDiv.hide();
    yellowDiv.hide();
}

  module.exports = {
    editMusicView,
    listMusicView,
    addMusicView
  };