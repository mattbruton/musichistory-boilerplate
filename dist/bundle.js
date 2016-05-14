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
            const songId = e.target.closest('div').id;

            $.ajax({
                url: `https://dazzling-fire-3629.firebaseio.com/songs/${songId}.json`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5sZXQgdmlld3MgPSByZXF1aXJlKCcuL3ZpZXdzLmpzJyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcblxuICAgIC8vIFZhcmlhYmxlcyB0byBiZSB1c2VkIGxhdGVyIGluIGZpbGVcblxuICAgIGNvbnN0IGFkZFNvbmdzID0gJChcIiNhZGRTb25nc1wiKTtcbiAgICBjb25zdCBzb25nTGlzdCA9ICQoXCIjc29uZ0xpc3RcIik7XG4gICAgY29uc3QgYWxidW1GaWVsZCA9ICQoXCIjYWxidW1cIik7XG4gICAgY29uc3QgYXJ0aXN0RmllbGQgPSAkKFwiI2FydGlzdFwiKTtcbiAgICBjb25zdCBzb25nRmllbGQgPSAkKFwiI3NvbmdcIik7XG4gICAgY29uc3Qgc29uZ0FkZEJ0biA9ICQoXCIjc29uZ0FkZEJ0blwiKTtcblxuXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgYXBwZW5kaW5nIGVhY2ggaXRlbSBmcm9tIEpTT04gZmlsZSB0byB0aGUgRE9NLiBjbGVhcnMgdGhlIERPTSBhbmQgdGhlbiBcbiAgICAvLyBwb3B1bGF0ZXMgd2l0aCBjdXJyZW50IGFycmF5LlxuXG4gICAgY29uc3QgYXBwZW5kU29uZ3MgPSAoc29uZ3MpID0+IHtcbiAgICAgICAgc29uZ0xpc3QuaHRtbChcIlwiKTtcbiAgICAgICAgZm9yIChsZXQgc29uZyBpbiBzb25ncykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNvbmcgPSBzb25nc1tzb25nXTtcbiAgICAgICAgICAgIHNvbmdMaXN0LmFwcGVuZChgPGRpdiBpZD1cIiR7c29uZ31cIiBjbGFzcz1cInNvbmdcIj48aDE+JHtjdXJyZW50U29uZy50aXRsZX08L2gxPjx1bD48bGk+XG4gICAgICAgICAgICBBbGJ1bTogJHtjdXJyZW50U29uZy5hbGJ1bX08L2xpPjxsaT5BcnRpc3Q6ICR7Y3VycmVudFNvbmcuYXJ0aXN0fTwvbGk+PC91bD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cIlwiIGNsYXNzPVwiZGVsXCI+UmVtb3ZlPC9idXR0b24+PC9kaXY+YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogT24gcGFnZSBsb2FkLCBMaXN0TXVzaWNWaWV3IGlzIHNob3duICovXG5cbiAgICB2aWV3cy5saXN0TXVzaWNWaWV3KCk7XG5cbiAgICAvKiBmdW5jdGlvbiB0byBkZWxldGUgc29uZ3MgLS0gdXBvbiBjbGlja2luZyB0aGUgZGVsZXRlIGJ1dHRvbiB3aXRoaW4gYW55IHNvbmcsIGlmIHRoZSBpZCBvZiB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gZXF1YWxzIHRoZSBpZCBrZXkgaW4gdGhlIHNvbmdIb2xkZXIgYXJyYXksIGl0IHJlbW92ZXMgdGhhdCBpdGVtIGZyb20gdGhlIGFycmF5LiB0aGVuIGFwcGVuZHMgdGhlIG5ld2x5IG1vZGlmaWVkIGFycmF5IGJhY2sgaW50byB0aGUgRE9NLiAqL1xuXG5cbiAgICAkKCcjc29uZ0xpc3QnKS5jbGljayhlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbFwiKSkge1xuICAgICAgICAgICAgY29uc3Qgc29uZ0lkID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuaWQ7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9kYXp6bGluZy1maXJlLTM2MjkuZmlyZWJhc2Vpby5jb20vc29uZ3MvJHtzb25nSWR9Lmpzb25gLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCJcbiAgICAgICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIiNzb25nQWRkQnRuXCIpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBuZXdTb25nID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtzb25nRmllbGQudmFsKCl9YCxcbiAgICAgICAgICAgIFwiYWxidW1cIjogYCR7YWxidW1GaWVsZC52YWwoKX1gLFxuICAgICAgICAgICAgXCJhcnRpc3RcIjogYCR7YXJ0aXN0RmllbGQudmFsKCl9YFxuICAgICAgICB9O1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9kYXp6bGluZy1maXJlLTM2MjkuZmlyZWJhc2Vpby5jb20vc29uZ3MvLmpzb25cIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3U29uZylcbiAgICAgICAgfSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICBhcnRpc3RGaWVsZC52YWwoXCJcIik7XG4gICAgICAgICAgICBzb25nRmllbGQudmFsKFwiXCIpO1xuICAgICAgICAgICAgYWxidW1GaWVsZC52YWwoXCJcIik7XG4gICAgICAgICAgICB2aWV3cy5saXN0TXVzaWNWaWV3KCk7XG4gICAgICAgICAgICBsb2FkUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qIEV2ZW50IGxpc3RlbmVycyBmb3IgVmlldyBmdW5jdGlvbnMgYWJvdmUgKi9cblxuXG4gICAgJChcIiNhZGRNdXNpY0J0blwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHZpZXdzLmFkZE11c2ljVmlldygpO1xuICAgIH0pO1xuXG5cbiAgICAkKFwiI2xpc3RNdXNpY0J0blwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcbiAgICB9KTtcblxuICAgIHZhciBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2RhenpsaW5nLWZpcmUtMzYyOS5maXJlYmFzZWlvLmNvbS9zb25ncy8uanNvblwiLFxuICAgICAgICB9KS5kb25lKHNvbmdzID0+IHtcbiAgICAgICAgICAgIGFwcGVuZFNvbmdzKHNvbmdzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxvYWRQYWdlKCk7XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuICBsZXQgYWRkU29uZ3MgPSAkKFwiI2FkZFNvbmdzXCIpO1xuICBsZXQgeWVsbG93RGl2ID0gJChcIi55ZWxsb3dEaXZcIik7XG4gIGxldCBibHVlRGl2PSAkKFwiLmJsdWVEaXZcIik7XG5cbiAgLy8gQ09ERSBGT1IgVklFVyBTRUxFQ1RJT05cblxuLyogTGlzdCBNdXNpYyBWaWV3IHNob3VsZCBiZSB0aGUgZGVmYXVsdCB2aWV3IGZvciB0aGUgYXBwLCB3aGljaCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBjb250YWluZWRcbmluIEpTT04gZmlsZXMsIGFuZCBhbiBhcmVhIGZvciB1c2VyIHRvIGZpbHRlciBzb25ncyBiYXNlZCBvbiBzZWxlY3RlZCBjcml0ZXJpYS4gKi9cblxubGV0IGxpc3RNdXNpY1ZpZXcgPSAoKSA9PiB7XG4gICAgYWRkU29uZ3MuaGlkZSgpO1xuICAgIGJsdWVEaXYuc2hvdygpO1xuICAgIHllbGxvd0Rpdi5zaG93KCk7XG4gIH07XG5cbi8qIEFkZCBNdXNpYyBWaWV3IHNob3VsZCBoaWRlIGFsbCBwcmltYXJ5IGNvbnRlbnQgYW5kIGRpc3BsYXkgYSBmb3JtIHdoaWNoIHRoZSB1c2VyIGNhbiB1dGlsaXR6ZSB0byBcbmVudGVyIG5ldyBzb25ncyBpbnRvIHRoZSBhcHAuICovXG5cbmxldCBhZGRNdXNpY1ZpZXcgPSAoKSA9PiB7XG4gICAgYWRkU29uZ3Muc2hvdygpO1xuICAgIGJsdWVEaXYuaGlkZSgpO1xuICAgIHllbGxvd0Rpdi5oaWRlKCk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGlzdE11c2ljVmlldyxcbiAgICBhZGRNdXNpY1ZpZXdcbiAgfTsiXX0=
