(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./views.js":2}],2:[function(require,module,exports){
"use strict";

  let addSongs = $("#addSongs");
  let yellowDiv = $(".yellowDiv");
  let blueDiv= $(".blueDiv");
  let moreDiv = $("#moreDiv");
  let songList = $("#songList");

  // CODE FOR VIEW SELECTION

/* List Music View should be the default view for the app, which displays information contained
in JSON files, and an area for user to filter songs based on selected criteria. */

let listMusicView = () => {
    addSongs.hide();
    blueDiv.show();
    yellowDiv.show();
    moreDiv.show();
  };

/* Add Music View should hide all primary content and display a form which the user can utilitze to 
enter new songs into the app. */

let addMusicView = () => {
    addSongs.show();
    blueDiv.hide();
    yellowDiv.hide();
    moreDiv.hide();
  };

  module.exports = {
    listMusicView,
    addMusicView
  };
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuXG5sZXQgdmlld3MgPSByZXF1aXJlKCcuL3ZpZXdzLmpzJyk7XG5cbmxldCBzb25nSG9sZGVyID0gW107XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4vLyBWYXJpYWJsZXMgdG8gYmUgdXNlZCBsYXRlciBpbiBmaWxlXG5cbiAgbGV0IGFkZFNvbmdzID0gJChcIiNhZGRTb25nc1wiKTtcbiAgbGV0IHNvbmdMaXN0ID0gJChcIiNzb25nTGlzdFwiKTtcbiAgbGV0IGFsYnVtRmllbGQgPSAkKFwiI2FsYnVtXCIpO1xuICBsZXQgYXJ0aXN0RmllbGQgPSAkKFwiI2FydGlzdFwiKTtcbiAgbGV0IHNvbmdGaWVsZCA9ICQoXCIjc29uZ1wiKTtcbiAgbGV0IHNvbmdBZGRCdG4gPSAkKFwiI3NvbmdBZGRCdG5cIik7XG5cbi8qIFdoZW4gbmV3IGpzb24gZmlsZXMgYXJlIGxvYWRlZCwgdGhlaXIgY29udGVudHMgYXJlIGdpdmVuIGFuIGlkIGFuZCBwdXNoZWQgaW50byB0aGUgc29uZyBob2xkZXIgYXJyYXkgYW5kIHRoZW4gdGhlIGFwcGVuZCBmdW5jdGlvbiBpcyBydW4gdG8gcG9wdWxhdGUgdGhlIERPTS4gKi9cblxuICBsZXQgcHVzaFNvbmdzID0gKHNvbmdzKSA9PiB7XG4gICAgc29uZ3Muc29uZ3MuZm9yRWFjaChmdW5jdGlvbihpKSB7XG4gICAgICBpLmlkID0gc29uZ0xpc3QubGVuZ3RoKys7XG4gICAgICBzb25nSG9sZGVyLnB1c2goaSk7XG4gICAgfSk7XG4gICAgYXBwZW5kU29uZ3MoKTtcbiAgfTtcblxuLy8gZnVuY3Rpb24gdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgYXBwZW5kaW5nIGVhY2ggaXRlbSBpbiBzb25nSG9sZGVyIGFycmF5IHRvIHRoZSBET00uIGNsZWFycyB0aGUgRE9NIGFuZCB0aGVuIFxuLy8gcG9wdWxhdGVzIHdpdGggY3VycmVudCBhcnJheS5cblxuICBsZXQgYXBwZW5kU29uZ3MgPSAoKSA9PiB7XG4gICAgc29uZ0xpc3QuaHRtbChcIlwiKTtcbiAgICBzb25nSG9sZGVyLmZvckVhY2goZnVuY3Rpb24oaSl7XG4gICAgICBzb25nTGlzdC5hcHBlbmQoYDxkaXYgaWQ9XCIke2kuaWR9XCI+PGgxPiR7aS50aXRsZX08L2gxPjx1bD48bGk+QWxidW06ICR7aS5hbGJ1bX08L2xpPjxsaT5BcnRpc3Q6ICR7aS5hcnRpc3R9PC9saT48L3VsPjxidXR0b24gdHlwZT1cIlwiIGNsYXNzPVwiZGVsXCI+UmVtb3ZlPC9idXR0b24+PC9kaXY+YCk7XG4gICAgfSk7XG4gIH07XG5cbi8qIE9uIHBhZ2UgbG9hZCwgTGlzdE11c2ljVmlldyBpcyBzaG93biAqL1xuXG4gIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcblxuICAvKiBmdW5jdGlvbiB0byBkZWxldGUgc29uZ3MgLS0gdXBvbiBjbGlja2luZyB0aGUgZGVsZXRlIGJ1dHRvbiB3aXRoaW4gYW55IHNvbmcsIGlmIHRoZSBpZCBvZiB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gZXF1YWxzIHRoZSBpZCBrZXkgaW4gdGhlIHNvbmdIb2xkZXIgYXJyYXksIGl0IHJlbW92ZXMgdGhhdCBpdGVtIGZyb20gdGhlIGFycmF5LiB0aGVuIGFwcGVuZHMgdGhlIG5ld2x5IG1vZGlmaWVkIGFycmF5IGJhY2sgaW50byB0aGUgRE9NLiAqL1xuXG4gIHNvbmdMaXN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJkZWxcIikge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNvbmdIb2xkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoc29uZ0hvbGRlcltpXS5pZCA9PSBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSB7XG4gICAgICAgICAgc29uZ0hvbGRlci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFwcGVuZFNvbmdzKCk7XG4gICAgfVxuICB9KTtcblxuXG4kKFwiI3NvbmdBZGRCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgc29uZ0hvbGRlci5wdXNoKHtcbiAgICAgIGFydGlzdDogYCR7JCgnI2FydGlzdCcpLnZhbCgpfWAsXG4gICAgICB0aXRsZTogYCR7JCgnI3NvbmcnKS52YWwoKX1gLFxuICAgICAgYWxidW06IGAkeyQoJyNhbGJ1bScpLnZhbCgpfWAsXG4gICAgICBpZDogYCR7c29uZ0xpc3QubGVuZ3RoKyt9YFxuICAgIH0pO1xuICAgIGFydGlzdEZpZWxkLnZhbChcIlwiKTtcbiAgICBzb25nRmllbGQudmFsKFwiXCIpO1xuICAgIGFsYnVtRmllbGQudmFsKFwiXCIpO1xuICAgIGFwcGVuZFNvbmdzKCk7XG4gIH0pO1xuXG4vKiBFdmVudCBsaXN0ZW5lcnMgZm9yIFZpZXcgZnVuY3Rpb25zIGFib3ZlICovXG4gIFxuXG4gICQoXCIjYWRkTXVzaWNCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmlld3MuYWRkTXVzaWNWaWV3KCk7XG4gIH0pO1xuXG5cbiAgJChcIiNsaXN0TXVzaWNCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmlld3MubGlzdE11c2ljVmlldygpO1xuICB9KTtcblxuXG4gICQoXCIjYWRkTW9yZVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwic29uZ3MyLmpzb25cIixcbiAgICAgIHN1Y2Nlc3M6IHB1c2hTb25nc1xuICAgIH0pO1xuICAgICQoXCIjYWRkTW9yZVwiKS5oaWRlKCk7XG4gIH0pO1xuXG4gIFxuICAkLmFqYXgoe1xuICAgIHVybDogXCJzb25nczEuanNvblwiLFxuICAgIHN1Y2Nlc3M6IHB1c2hTb25nc1xuICB9KTtcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzb25nSG9sZGVyXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4gIGxldCBhZGRTb25ncyA9ICQoXCIjYWRkU29uZ3NcIik7XG4gIGxldCB5ZWxsb3dEaXYgPSAkKFwiLnllbGxvd0RpdlwiKTtcbiAgbGV0IGJsdWVEaXY9ICQoXCIuYmx1ZURpdlwiKTtcbiAgbGV0IG1vcmVEaXYgPSAkKFwiI21vcmVEaXZcIik7XG4gIGxldCBzb25nTGlzdCA9ICQoXCIjc29uZ0xpc3RcIik7XG5cbiAgLy8gQ09ERSBGT1IgVklFVyBTRUxFQ1RJT05cblxuLyogTGlzdCBNdXNpYyBWaWV3IHNob3VsZCBiZSB0aGUgZGVmYXVsdCB2aWV3IGZvciB0aGUgYXBwLCB3aGljaCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBjb250YWluZWRcbmluIEpTT04gZmlsZXMsIGFuZCBhbiBhcmVhIGZvciB1c2VyIHRvIGZpbHRlciBzb25ncyBiYXNlZCBvbiBzZWxlY3RlZCBjcml0ZXJpYS4gKi9cblxubGV0IGxpc3RNdXNpY1ZpZXcgPSAoKSA9PiB7XG4gICAgYWRkU29uZ3MuaGlkZSgpO1xuICAgIGJsdWVEaXYuc2hvdygpO1xuICAgIHllbGxvd0Rpdi5zaG93KCk7XG4gICAgbW9yZURpdi5zaG93KCk7XG4gIH07XG5cbi8qIEFkZCBNdXNpYyBWaWV3IHNob3VsZCBoaWRlIGFsbCBwcmltYXJ5IGNvbnRlbnQgYW5kIGRpc3BsYXkgYSBmb3JtIHdoaWNoIHRoZSB1c2VyIGNhbiB1dGlsaXR6ZSB0byBcbmVudGVyIG5ldyBzb25ncyBpbnRvIHRoZSBhcHAuICovXG5cbmxldCBhZGRNdXNpY1ZpZXcgPSAoKSA9PiB7XG4gICAgYWRkU29uZ3Muc2hvdygpO1xuICAgIGJsdWVEaXYuaGlkZSgpO1xuICAgIHllbGxvd0Rpdi5oaWRlKCk7XG4gICAgbW9yZURpdi5oaWRlKCk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGlzdE11c2ljVmlldyxcbiAgICBhZGRNdXNpY1ZpZXdcbiAgfTsiXX0=
