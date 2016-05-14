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
            songList.append(`<div id="${song}" class="song"><h1>${currentSong.title}</h1><ul><li>Album: ${currentSong.album}</li><li>Artist: ${currentSong.artist}</li></ul><button type="" class="del">Remove</button></div>`);
        }
    };

    /* On page load, ListMusicView is shown */

    views.listMusicView();

    /* function to delete songs -- upon clicking the delete button within any song, if the id of the parent of the button equals the id key in the songHolder array, it removes that item from the array. then appends the newly modified array back into the DOM. */


    $('#songList').click(function(e) {
        if (e.target.classList.contains("del")) {
            let id = e.target.closest('div').id;

            $.ajax({
                url: `https://dazzling-fire-3629.firebaseio.com/songs/${id}.json`,
                type: "DELETE"
            }).done(function() {
                loadPage();
            });
        }
    });

    $("#songAddBtn").click(function() {

        let newSong = {
            "title": `${songField.val()}`,
            "album": `${albumField.val()}`,
            "artist": `${artistField.val()}`
        };

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
        }).done(function(songs) {
            appendSongs(songs);
        });
    };

    loadPage();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5cbmxldCB2aWV3cyA9IHJlcXVpcmUoJy4vdmlld3MuanMnKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBWYXJpYWJsZXMgdG8gYmUgdXNlZCBsYXRlciBpbiBmaWxlXG5cbiAgICBsZXQgYWRkU29uZ3MgPSAkKFwiI2FkZFNvbmdzXCIpO1xuICAgIGxldCBzb25nTGlzdCA9ICQoXCIjc29uZ0xpc3RcIik7XG4gICAgbGV0IGFsYnVtRmllbGQgPSAkKFwiI2FsYnVtXCIpO1xuICAgIGxldCBhcnRpc3RGaWVsZCA9ICQoXCIjYXJ0aXN0XCIpO1xuICAgIGxldCBzb25nRmllbGQgPSAkKFwiI3NvbmdcIik7XG4gICAgbGV0IHNvbmdBZGRCdG4gPSAkKFwiI3NvbmdBZGRCdG5cIik7XG5cblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGFwcGVuZGluZyBlYWNoIGl0ZW0gZnJvbSBKU09OIGZpbGUgdG8gdGhlIERPTS4gY2xlYXJzIHRoZSBET00gYW5kIHRoZW4gXG4gICAgLy8gcG9wdWxhdGVzIHdpdGggY3VycmVudCBhcnJheS5cblxuICAgIGxldCBhcHBlbmRTb25ncyA9IChzb25ncykgPT4ge1xuICAgICAgICBzb25nTGlzdC5odG1sKFwiXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzb25ncyk7XG4gICAgICAgIGZvciAobGV0IHNvbmcgaW4gc29uZ3MpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U29uZyA9IHNvbmdzW3NvbmddO1xuICAgICAgICAgICAgc29uZ0xpc3QuYXBwZW5kKGA8ZGl2IGlkPVwiJHtzb25nfVwiIGNsYXNzPVwic29uZ1wiPjxoMT4ke2N1cnJlbnRTb25nLnRpdGxlfTwvaDE+PHVsPjxsaT5BbGJ1bTogJHtjdXJyZW50U29uZy5hbGJ1bX08L2xpPjxsaT5BcnRpc3Q6ICR7Y3VycmVudFNvbmcuYXJ0aXN0fTwvbGk+PC91bD48YnV0dG9uIHR5cGU9XCJcIiBjbGFzcz1cImRlbFwiPlJlbW92ZTwvYnV0dG9uPjwvZGl2PmApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qIE9uIHBhZ2UgbG9hZCwgTGlzdE11c2ljVmlldyBpcyBzaG93biAqL1xuXG4gICAgdmlld3MubGlzdE11c2ljVmlldygpO1xuXG4gICAgLyogZnVuY3Rpb24gdG8gZGVsZXRlIHNvbmdzIC0tIHVwb24gY2xpY2tpbmcgdGhlIGRlbGV0ZSBidXR0b24gd2l0aGluIGFueSBzb25nLCBpZiB0aGUgaWQgb2YgdGhlIHBhcmVudCBvZiB0aGUgYnV0dG9uIGVxdWFscyB0aGUgaWQga2V5IGluIHRoZSBzb25nSG9sZGVyIGFycmF5LCBpdCByZW1vdmVzIHRoYXQgaXRlbSBmcm9tIHRoZSBhcnJheS4gdGhlbiBhcHBlbmRzIHRoZSBuZXdseSBtb2RpZmllZCBhcnJheSBiYWNrIGludG8gdGhlIERPTS4gKi9cblxuXG4gICAgJCgnI3NvbmdMaXN0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsXCIpKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5pZDtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL2RhenpsaW5nLWZpcmUtMzYyOS5maXJlYmFzZWlvLmNvbS9zb25ncy8ke2lkfS5qc29uYCxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIiNzb25nQWRkQnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBuZXdTb25nID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtzb25nRmllbGQudmFsKCl9YCxcbiAgICAgICAgICAgIFwiYWxidW1cIjogYCR7YWxidW1GaWVsZC52YWwoKX1gLFxuICAgICAgICAgICAgXCJhcnRpc3RcIjogYCR7YXJ0aXN0RmllbGQudmFsKCl9YFxuICAgICAgICB9O1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9kYXp6bGluZy1maXJlLTM2MjkuZmlyZWJhc2Vpby5jb20vc29uZ3MvLmpzb25cIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3U29uZylcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFydGlzdEZpZWxkLnZhbChcIlwiKTtcbiAgICAgICAgICAgIHNvbmdGaWVsZC52YWwoXCJcIik7XG4gICAgICAgICAgICBhbGJ1bUZpZWxkLnZhbChcIlwiKTtcbiAgICAgICAgICAgIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcbiAgICAgICAgICAgIGxvYWRQYWdlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLyogRXZlbnQgbGlzdGVuZXJzIGZvciBWaWV3IGZ1bmN0aW9ucyBhYm92ZSAqL1xuXG5cbiAgICAkKFwiI2FkZE11c2ljQnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWV3cy5hZGRNdXNpY1ZpZXcoKTtcbiAgICB9KTtcblxuXG4gICAgJChcIiNsaXN0TXVzaWNCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2RhenpsaW5nLWZpcmUtMzYyOS5maXJlYmFzZWlvLmNvbS9zb25ncy8uanNvblwiLFxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHNvbmdzKSB7XG4gICAgICAgICAgICBhcHBlbmRTb25ncyhzb25ncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsb2FkUGFnZSgpO1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgbGV0IGFkZFNvbmdzID0gJChcIiNhZGRTb25nc1wiKTtcbiAgbGV0IHllbGxvd0RpdiA9ICQoXCIueWVsbG93RGl2XCIpO1xuICBsZXQgYmx1ZURpdj0gJChcIi5ibHVlRGl2XCIpO1xuXG4gIC8vIENPREUgRk9SIFZJRVcgU0VMRUNUSU9OXG5cbi8qIExpc3QgTXVzaWMgVmlldyBzaG91bGQgYmUgdGhlIGRlZmF1bHQgdmlldyBmb3IgdGhlIGFwcCwgd2hpY2ggZGlzcGxheXMgaW5mb3JtYXRpb24gY29udGFpbmVkXG5pbiBKU09OIGZpbGVzLCBhbmQgYW4gYXJlYSBmb3IgdXNlciB0byBmaWx0ZXIgc29uZ3MgYmFzZWQgb24gc2VsZWN0ZWQgY3JpdGVyaWEuICovXG5cbmxldCBsaXN0TXVzaWNWaWV3ID0gKCkgPT4ge1xuICAgIGFkZFNvbmdzLmhpZGUoKTtcbiAgICBibHVlRGl2LnNob3coKTtcbiAgICB5ZWxsb3dEaXYuc2hvdygpO1xuICB9O1xuXG4vKiBBZGQgTXVzaWMgVmlldyBzaG91bGQgaGlkZSBhbGwgcHJpbWFyeSBjb250ZW50IGFuZCBkaXNwbGF5IGEgZm9ybSB3aGljaCB0aGUgdXNlciBjYW4gdXRpbGl0emUgdG8gXG5lbnRlciBuZXcgc29uZ3MgaW50byB0aGUgYXBwLiAqL1xuXG5sZXQgYWRkTXVzaWNWaWV3ID0gKCkgPT4ge1xuICAgIGFkZFNvbmdzLnNob3coKTtcbiAgICBibHVlRGl2LmhpZGUoKTtcbiAgICB5ZWxsb3dEaXYuaGlkZSgpO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGxpc3RNdXNpY1ZpZXcsXG4gICAgYWRkTXVzaWNWaWV3XG4gIH07Il19
