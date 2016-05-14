(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


let views = require('./views.js');

$(document).ready(function() {

// Variables to be used later in file


  let addSongs = $("#addSongs");
  let songList = $("#songList");
  let albumField = $("#album");
  let artistField = $("#artist");
  let songField = $("#song");
  let songAddBtn = $("#songAddBtn");

  
// function that is responsible for appending each item from JSON file to the DOM. clears the DOM and then 
// populates with current array.

  let appendSongs = (songs) => {
    songList.html("");
    console.log(songs);
    for (let song in songs) {
      let currentSong = songs[song];
      songList.append(`<div id="${currentSong.id}" class="song"><h1>${currentSong.title}</h1><ul><li>Album: ${currentSong.album}</li><li>Artist: ${currentSong.artist}</li></ul><button type="" class="del">Remove</button></div>`);
    }
  };

  // id="${songTarget.i.id}"

/* On page load, ListMusicView is shown */

  views.listMusicView();

  /* function to delete songs -- upon clicking the delete button within any song, if the id of the parent of the button equals the id key in the songHolder array, it removes that item from the array. then appends the newly modified array back into the DOM. */

  // songList.click(function(e) {
  //   if(e.target.classList == "del") {
  //     for(var i = 0; i < songHolder.length; i++) {
  //       if(songHolder[i].id == e.target.parentNode.id) {
  //         songHolder.splice(i, 1);
  //       }
  //     }
  //     appendSongs();
  //   }
  // });


$("#songAddBtn").click(function() {

    let newSong = {
      "title": `${songField.val()}`,
      "album": `${albumField.val()}`,
      "artist": `${artistField.val()}`
    }

    $.ajax({
      url: "https://dazzling-fire-3629.firebaseio.com/songs/.json",
      type: "POST",
      data: JSON.stringify(newSong)
    }).done(function() {
      artistField.val("");
      songField.val("");
      albumField.val("");
      views.listMusicView();
      loadPage();
    });
  });

/* Event listeners for View functions above */
  

  $("#addMusicBtn").click(function() {
    views.addMusicView();
  });


  $("#listMusicBtn").click(function() {
    views.listMusicView();
  });

  let loadPage = () => {
  $.ajax({
    url: "https://dazzling-fire-3629.firebaseio.com/songs/.json",
  }).done(function(songs){
    appendSongs(songs);
  });
}

loadPage();

// console.log(songHolder);

});

module.exports = {

};
},{"./views.js":2}],2:[function(require,module,exports){
"use strict";

  let addSongs = $("#addSongs");
  let yellowDiv = $(".yellowDiv");
  let blueDiv= $(".blueDiv");

  // CODE FOR VIEW SELECTION

/* List Music View should be the default view for the app, which displays information contained
in JSON files, and an area for user to filter songs based on selected criteria. */

let listMusicView = () => {
    addSongs.hide();
    blueDiv.show();
    yellowDiv.show();
  };

/* Add Music View should hide all primary content and display a form which the user can utilitze to 
enter new songs into the app. */

let addMusicView = () => {
    addSongs.show();
    blueDiv.hide();
    yellowDiv.hide();
  };

  module.exports = {
    listMusicView,
    addMusicView
  };
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5cbmxldCB2aWV3cyA9IHJlcXVpcmUoJy4vdmlld3MuanMnKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbi8vIFZhcmlhYmxlcyB0byBiZSB1c2VkIGxhdGVyIGluIGZpbGVcblxuXG4gIGxldCBhZGRTb25ncyA9ICQoXCIjYWRkU29uZ3NcIik7XG4gIGxldCBzb25nTGlzdCA9ICQoXCIjc29uZ0xpc3RcIik7XG4gIGxldCBhbGJ1bUZpZWxkID0gJChcIiNhbGJ1bVwiKTtcbiAgbGV0IGFydGlzdEZpZWxkID0gJChcIiNhcnRpc3RcIik7XG4gIGxldCBzb25nRmllbGQgPSAkKFwiI3NvbmdcIik7XG4gIGxldCBzb25nQWRkQnRuID0gJChcIiNzb25nQWRkQnRuXCIpO1xuXG4gIFxuLy8gZnVuY3Rpb24gdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgYXBwZW5kaW5nIGVhY2ggaXRlbSBmcm9tIEpTT04gZmlsZSB0byB0aGUgRE9NLiBjbGVhcnMgdGhlIERPTSBhbmQgdGhlbiBcbi8vIHBvcHVsYXRlcyB3aXRoIGN1cnJlbnQgYXJyYXkuXG5cbiAgbGV0IGFwcGVuZFNvbmdzID0gKHNvbmdzKSA9PiB7XG4gICAgc29uZ0xpc3QuaHRtbChcIlwiKTtcbiAgICBjb25zb2xlLmxvZyhzb25ncyk7XG4gICAgZm9yIChsZXQgc29uZyBpbiBzb25ncykge1xuICAgICAgbGV0IGN1cnJlbnRTb25nID0gc29uZ3Nbc29uZ107XG4gICAgICBzb25nTGlzdC5hcHBlbmQoYDxkaXYgaWQ9XCIke2N1cnJlbnRTb25nLmlkfVwiIGNsYXNzPVwic29uZ1wiPjxoMT4ke2N1cnJlbnRTb25nLnRpdGxlfTwvaDE+PHVsPjxsaT5BbGJ1bTogJHtjdXJyZW50U29uZy5hbGJ1bX08L2xpPjxsaT5BcnRpc3Q6ICR7Y3VycmVudFNvbmcuYXJ0aXN0fTwvbGk+PC91bD48YnV0dG9uIHR5cGU9XCJcIiBjbGFzcz1cImRlbFwiPlJlbW92ZTwvYnV0dG9uPjwvZGl2PmApO1xuICAgIH1cbiAgfTtcblxuICAvLyBpZD1cIiR7c29uZ1RhcmdldC5pLmlkfVwiXG5cbi8qIE9uIHBhZ2UgbG9hZCwgTGlzdE11c2ljVmlldyBpcyBzaG93biAqL1xuXG4gIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcblxuICAvKiBmdW5jdGlvbiB0byBkZWxldGUgc29uZ3MgLS0gdXBvbiBjbGlja2luZyB0aGUgZGVsZXRlIGJ1dHRvbiB3aXRoaW4gYW55IHNvbmcsIGlmIHRoZSBpZCBvZiB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gZXF1YWxzIHRoZSBpZCBrZXkgaW4gdGhlIHNvbmdIb2xkZXIgYXJyYXksIGl0IHJlbW92ZXMgdGhhdCBpdGVtIGZyb20gdGhlIGFycmF5LiB0aGVuIGFwcGVuZHMgdGhlIG5ld2x5IG1vZGlmaWVkIGFycmF5IGJhY2sgaW50byB0aGUgRE9NLiAqL1xuXG4gIC8vIHNvbmdMaXN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgLy8gICBpZihlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJkZWxcIikge1xuICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNvbmdIb2xkZXIubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgaWYoc29uZ0hvbGRlcltpXS5pZCA9PSBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSB7XG4gIC8vICAgICAgICAgc29uZ0hvbGRlci5zcGxpY2UoaSwgMSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICAgIGFwcGVuZFNvbmdzKCk7XG4gIC8vICAgfVxuICAvLyB9KTtcblxuXG4kKFwiI3NvbmdBZGRCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgbmV3U29uZyA9IHtcbiAgICAgIFwidGl0bGVcIjogYCR7c29uZ0ZpZWxkLnZhbCgpfWAsXG4gICAgICBcImFsYnVtXCI6IGAke2FsYnVtRmllbGQudmFsKCl9YCxcbiAgICAgIFwiYXJ0aXN0XCI6IGAke2FydGlzdEZpZWxkLnZhbCgpfWBcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImh0dHBzOi8vZGF6emxpbmctZmlyZS0zNjI5LmZpcmViYXNlaW8uY29tL3NvbmdzLy5qc29uXCIsXG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld1NvbmcpXG4gICAgfSkuZG9uZShmdW5jdGlvbigpIHtcbiAgICAgIGFydGlzdEZpZWxkLnZhbChcIlwiKTtcbiAgICAgIHNvbmdGaWVsZC52YWwoXCJcIik7XG4gICAgICBhbGJ1bUZpZWxkLnZhbChcIlwiKTtcbiAgICAgIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcbiAgICAgIGxvYWRQYWdlKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4vKiBFdmVudCBsaXN0ZW5lcnMgZm9yIFZpZXcgZnVuY3Rpb25zIGFib3ZlICovXG4gIFxuXG4gICQoXCIjYWRkTXVzaWNCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmlld3MuYWRkTXVzaWNWaWV3KCk7XG4gIH0pO1xuXG5cbiAgJChcIiNsaXN0TXVzaWNCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmlld3MubGlzdE11c2ljVmlldygpO1xuICB9KTtcblxuICBsZXQgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBcImh0dHBzOi8vZGF6emxpbmctZmlyZS0zNjI5LmZpcmViYXNlaW8uY29tL3NvbmdzLy5qc29uXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24oc29uZ3Mpe1xuICAgIGFwcGVuZFNvbmdzKHNvbmdzKTtcbiAgfSk7XG59XG5cbmxvYWRQYWdlKCk7XG5cbi8vIGNvbnNvbGUubG9nKHNvbmdIb2xkZXIpO1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgbGV0IGFkZFNvbmdzID0gJChcIiNhZGRTb25nc1wiKTtcbiAgbGV0IHllbGxvd0RpdiA9ICQoXCIueWVsbG93RGl2XCIpO1xuICBsZXQgYmx1ZURpdj0gJChcIi5ibHVlRGl2XCIpO1xuXG4gIC8vIENPREUgRk9SIFZJRVcgU0VMRUNUSU9OXG5cbi8qIExpc3QgTXVzaWMgVmlldyBzaG91bGQgYmUgdGhlIGRlZmF1bHQgdmlldyBmb3IgdGhlIGFwcCwgd2hpY2ggZGlzcGxheXMgaW5mb3JtYXRpb24gY29udGFpbmVkXG5pbiBKU09OIGZpbGVzLCBhbmQgYW4gYXJlYSBmb3IgdXNlciB0byBmaWx0ZXIgc29uZ3MgYmFzZWQgb24gc2VsZWN0ZWQgY3JpdGVyaWEuICovXG5cbmxldCBsaXN0TXVzaWNWaWV3ID0gKCkgPT4ge1xuICAgIGFkZFNvbmdzLmhpZGUoKTtcbiAgICBibHVlRGl2LnNob3coKTtcbiAgICB5ZWxsb3dEaXYuc2hvdygpO1xuICB9O1xuXG4vKiBBZGQgTXVzaWMgVmlldyBzaG91bGQgaGlkZSBhbGwgcHJpbWFyeSBjb250ZW50IGFuZCBkaXNwbGF5IGEgZm9ybSB3aGljaCB0aGUgdXNlciBjYW4gdXRpbGl0emUgdG8gXG5lbnRlciBuZXcgc29uZ3MgaW50byB0aGUgYXBwLiAqL1xuXG5sZXQgYWRkTXVzaWNWaWV3ID0gKCkgPT4ge1xuICAgIGFkZFNvbmdzLnNob3coKTtcbiAgICBibHVlRGl2LmhpZGUoKTtcbiAgICB5ZWxsb3dEaXYuaGlkZSgpO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGxpc3RNdXNpY1ZpZXcsXG4gICAgYWRkTXVzaWNWaWV3XG4gIH07Il19
