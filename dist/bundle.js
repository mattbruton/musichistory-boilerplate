(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let views = require('./views.js');

$(document).ready(() => {

    // Variables to be used later in file

    const addSongs = $("#addSongs");
    const songList = $("#songList");
    const albumField = $("#album");
    const artistField = $("#artist");
    const songField = $("#song");
    const songAddBtn = $("#songAddBtn");


    // function that is responsible for appending each item from JSON file to the DOM. clears the DOM and then 
    // populates with current array.

    const appendSongs = (songs) => {
        songList.html("");
        console.log(songs);
        for (let song in songs) {
            const currentSong = songs[song];
            songList.append(`<div id="${song}" class="song"><h1>${currentSong.title}</h1><ul><li>
            Album: ${currentSong.album}</li><li>Artist: ${currentSong.artist}</li></ul>
            <button type="" class="del">Remove</button></div>`);
        }
    };

    /* On page load, ListMusicView is shown */

    views.listMusicView();

    /* function to delete songs -- upon clicking the delete button within any song, if the id of the parent of the button equals the id key in the songHolder array, it removes that item from the array. then appends the newly modified array back into the DOM. */


    $('#songList').click(e => {
        if (e.target.classList.contains("del")) {
            const id = e.target.closest('div').id;

            $.ajax({
                url: `https://dazzling-fire-3629.firebaseio.com/songs/${id}.json`,
                type: "DELETE"
            }).done(() => {
                loadPage();
            });
        }
    });

    $("#songAddBtn").click(() => {

        const newSong = {
            "title": `${songField.val()}`,
            "album": `${albumField.val()}`,
            "artist": `${artistField.val()}`
        };

        $.ajax({
            url: "https://dazzling-fire-3629.firebaseio.com/songs/.json",
            type: "POST",
            data: JSON.stringify(newSong)
        }).done(() => {
            artistField.val("");
            songField.val("");
            albumField.val("");
            views.listMusicView();
            loadPage();
        });
    });

    /* Event listeners for View functions above */


    $("#addMusicBtn").click(() => {
        views.addMusicView();
    });


    $("#listMusicBtn").click(() => {
        views.listMusicView();
    });

    var loadPage = () => {
        $.ajax({
            url: "https://dazzling-fire-3629.firebaseio.com/songs/.json",
        }).done(songs => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCB2aWV3cyA9IHJlcXVpcmUoJy4vdmlld3MuanMnKTtcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXG4gICAgLy8gVmFyaWFibGVzIHRvIGJlIHVzZWQgbGF0ZXIgaW4gZmlsZVxuXG4gICAgY29uc3QgYWRkU29uZ3MgPSAkKFwiI2FkZFNvbmdzXCIpO1xuICAgIGNvbnN0IHNvbmdMaXN0ID0gJChcIiNzb25nTGlzdFwiKTtcbiAgICBjb25zdCBhbGJ1bUZpZWxkID0gJChcIiNhbGJ1bVwiKTtcbiAgICBjb25zdCBhcnRpc3RGaWVsZCA9ICQoXCIjYXJ0aXN0XCIpO1xuICAgIGNvbnN0IHNvbmdGaWVsZCA9ICQoXCIjc29uZ1wiKTtcbiAgICBjb25zdCBzb25nQWRkQnRuID0gJChcIiNzb25nQWRkQnRuXCIpO1xuXG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBhcHBlbmRpbmcgZWFjaCBpdGVtIGZyb20gSlNPTiBmaWxlIHRvIHRoZSBET00uIGNsZWFycyB0aGUgRE9NIGFuZCB0aGVuIFxuICAgIC8vIHBvcHVsYXRlcyB3aXRoIGN1cnJlbnQgYXJyYXkuXG5cbiAgICBjb25zdCBhcHBlbmRTb25ncyA9IChzb25ncykgPT4ge1xuICAgICAgICBzb25nTGlzdC5odG1sKFwiXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzb25ncyk7XG4gICAgICAgIGZvciAobGV0IHNvbmcgaW4gc29uZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTb25nID0gc29uZ3Nbc29uZ107XG4gICAgICAgICAgICBzb25nTGlzdC5hcHBlbmQoYDxkaXYgaWQ9XCIke3Nvbmd9XCIgY2xhc3M9XCJzb25nXCI+PGgxPiR7Y3VycmVudFNvbmcudGl0bGV9PC9oMT48dWw+PGxpPlxuICAgICAgICAgICAgQWxidW06ICR7Y3VycmVudFNvbmcuYWxidW19PC9saT48bGk+QXJ0aXN0OiAke2N1cnJlbnRTb25nLmFydGlzdH08L2xpPjwvdWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJcIiBjbGFzcz1cImRlbFwiPlJlbW92ZTwvYnV0dG9uPjwvZGl2PmApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qIE9uIHBhZ2UgbG9hZCwgTGlzdE11c2ljVmlldyBpcyBzaG93biAqL1xuXG4gICAgdmlld3MubGlzdE11c2ljVmlldygpO1xuXG4gICAgLyogZnVuY3Rpb24gdG8gZGVsZXRlIHNvbmdzIC0tIHVwb24gY2xpY2tpbmcgdGhlIGRlbGV0ZSBidXR0b24gd2l0aGluIGFueSBzb25nLCBpZiB0aGUgaWQgb2YgdGhlIHBhcmVudCBvZiB0aGUgYnV0dG9uIGVxdWFscyB0aGUgaWQga2V5IGluIHRoZSBzb25nSG9sZGVyIGFycmF5LCBpdCByZW1vdmVzIHRoYXQgaXRlbSBmcm9tIHRoZSBhcnJheS4gdGhlbiBhcHBlbmRzIHRoZSBuZXdseSBtb2RpZmllZCBhcnJheSBiYWNrIGludG8gdGhlIERPTS4gKi9cblxuXG4gICAgJCgnI3NvbmdMaXN0JykuY2xpY2soZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuaWQ7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9kYXp6bGluZy1maXJlLTM2MjkuZmlyZWJhc2Vpby5jb20vc29uZ3MvJHtpZH0uanNvbmAsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIlxuICAgICAgICAgICAgfSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZFBhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI3NvbmdBZGRCdG5cIikuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG5ld1NvbmcgPSB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IGAke3NvbmdGaWVsZC52YWwoKX1gLFxuICAgICAgICAgICAgXCJhbGJ1bVwiOiBgJHthbGJ1bUZpZWxkLnZhbCgpfWAsXG4gICAgICAgICAgICBcImFydGlzdFwiOiBgJHthcnRpc3RGaWVsZC52YWwoKX1gXG4gICAgICAgIH07XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2RhenpsaW5nLWZpcmUtMzYyOS5maXJlYmFzZWlvLmNvbS9zb25ncy8uanNvblwiLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdTb25nKVxuICAgICAgICB9KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIGFydGlzdEZpZWxkLnZhbChcIlwiKTtcbiAgICAgICAgICAgIHNvbmdGaWVsZC52YWwoXCJcIik7XG4gICAgICAgICAgICBhbGJ1bUZpZWxkLnZhbChcIlwiKTtcbiAgICAgICAgICAgIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcbiAgICAgICAgICAgIGxvYWRQYWdlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLyogRXZlbnQgbGlzdGVuZXJzIGZvciBWaWV3IGZ1bmN0aW9ucyBhYm92ZSAqL1xuXG5cbiAgICAkKFwiI2FkZE11c2ljQnRuXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdmlld3MuYWRkTXVzaWNWaWV3KCk7XG4gICAgfSk7XG5cblxuICAgICQoXCIjbGlzdE11c2ljQnRuXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdmlld3MubGlzdE11c2ljVmlldygpO1xuICAgIH0pO1xuXG4gICAgdmFyIGxvYWRQYWdlID0gKCkgPT4ge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vZGF6emxpbmctZmlyZS0zNjI5LmZpcmViYXNlaW8uY29tL3NvbmdzLy5qc29uXCIsXG4gICAgICAgIH0pLmRvbmUoc29uZ3MgPT4ge1xuICAgICAgICAgICAgYXBwZW5kU29uZ3Moc29uZ3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbG9hZFBhZ2UoKTtcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4gIGxldCBhZGRTb25ncyA9ICQoXCIjYWRkU29uZ3NcIik7XG4gIGxldCB5ZWxsb3dEaXYgPSAkKFwiLnllbGxvd0RpdlwiKTtcbiAgbGV0IGJsdWVEaXY9ICQoXCIuYmx1ZURpdlwiKTtcblxuICAvLyBDT0RFIEZPUiBWSUVXIFNFTEVDVElPTlxuXG4vKiBMaXN0IE11c2ljIFZpZXcgc2hvdWxkIGJlIHRoZSBkZWZhdWx0IHZpZXcgZm9yIHRoZSBhcHAsIHdoaWNoIGRpc3BsYXlzIGluZm9ybWF0aW9uIGNvbnRhaW5lZFxuaW4gSlNPTiBmaWxlcywgYW5kIGFuIGFyZWEgZm9yIHVzZXIgdG8gZmlsdGVyIHNvbmdzIGJhc2VkIG9uIHNlbGVjdGVkIGNyaXRlcmlhLiAqL1xuXG5sZXQgbGlzdE11c2ljVmlldyA9ICgpID0+IHtcbiAgICBhZGRTb25ncy5oaWRlKCk7XG4gICAgYmx1ZURpdi5zaG93KCk7XG4gICAgeWVsbG93RGl2LnNob3coKTtcbiAgfTtcblxuLyogQWRkIE11c2ljIFZpZXcgc2hvdWxkIGhpZGUgYWxsIHByaW1hcnkgY29udGVudCBhbmQgZGlzcGxheSBhIGZvcm0gd2hpY2ggdGhlIHVzZXIgY2FuIHV0aWxpdHplIHRvIFxuZW50ZXIgbmV3IHNvbmdzIGludG8gdGhlIGFwcC4gKi9cblxubGV0IGFkZE11c2ljVmlldyA9ICgpID0+IHtcbiAgICBhZGRTb25ncy5zaG93KCk7XG4gICAgYmx1ZURpdi5oaWRlKCk7XG4gICAgeWVsbG93RGl2LmhpZGUoKTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsaXN0TXVzaWNWaWV3LFxuICAgIGFkZE11c2ljVmlld1xuICB9OyJdfQ==
