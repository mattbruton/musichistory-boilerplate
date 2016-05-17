(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let views = require('./views.js');
let idHold = "";
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
            <button type="" class="del">Remove</button><button type="" class="edit">Edit</button></div>`);
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

        if (e.target.classList.contains("edit")) {
            const songId = e.target.closest('div').id;

            $.ajax({
                url: `https://dazzling-fire-3629.firebaseio.com/songs/${songId}.json`,
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    idHold = songId;
                    console.log(idHold)
                    $('#edit-artist').val(data.artist);
                    $('#edit-song').val(data.title);
                    $('#edit-album').val(data.album);
                }
            }).done(() => {
                views.editMusicView();

            });
        }
    });


    $('#songEditBtn').click(function() {
        let editTitle = $('#edit-song').val();
        let editAlbum = $('#edit-album').val();
        let editArtist = $('#edit-artist').val();
        console.log("clikcing")

        $.ajax({
            type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
            dataType: 'json', // Set datatype - affects Accept header
            url: `https://dazzling-fire-3629.firebaseio.com/songs/${idHold}.json`, // A valid URL
            headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
            data: `{"title": "${editTitle}", "artist": "${editArtist}", "album": "${editAlbum}"}` // Some data e.g. Valid JSON as a string
        }).done(() => {
            $('#edit-album').val("");
            $('#edit-song').val("");
            $('#edit-artist').val("");
            views.listMusicView();
            loadPage();
    })
    })
    // $('#songList').click(e => {
    //     if (e.target.classList.contains("edit")) {
    //         const songId = e.target.closest('div').id;

    //         $.ajax({
    //             url: `https://dazzling-fire-3629.firebaseio.com/songs/${songId}.json`,
    //             type: "GET",
    //         }).done(() => {
    //             views.editMusicView();
    //             $('#edit-artist').val(song.artist);
    //             // loadPage();
    //         });
    //     }
    // });

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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCB2aWV3cyA9IHJlcXVpcmUoJy4vdmlld3MuanMnKTtcbmxldCBpZEhvbGQgPSBcIlwiO1xuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXG4gICAgLy8gVmFyaWFibGVzIHRvIGJlIHVzZWQgbGF0ZXIgaW4gZmlsZVxuXG4gICAgY29uc3QgYWRkU29uZ3MgPSAkKFwiI2FkZFNvbmdzXCIpO1xuICAgIGNvbnN0IHNvbmdMaXN0ID0gJChcIiNzb25nTGlzdFwiKTtcbiAgICBjb25zdCBhbGJ1bUZpZWxkID0gJChcIiNhbGJ1bVwiKTtcbiAgICBjb25zdCBhcnRpc3RGaWVsZCA9ICQoXCIjYXJ0aXN0XCIpO1xuICAgIGNvbnN0IHNvbmdGaWVsZCA9ICQoXCIjc29uZ1wiKTtcbiAgICBjb25zdCBzb25nQWRkQnRuID0gJChcIiNzb25nQWRkQnRuXCIpO1xuXG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBhcHBlbmRpbmcgZWFjaCBpdGVtIGZyb20gSlNPTiBmaWxlIHRvIHRoZSBET00uIGNsZWFycyB0aGUgRE9NIGFuZCB0aGVuIFxuICAgIC8vIHBvcHVsYXRlcyB3aXRoIGN1cnJlbnQgYXJyYXkuXG5cbiAgICBjb25zdCBhcHBlbmRTb25ncyA9IChzb25ncykgPT4ge1xuICAgICAgICBzb25nTGlzdC5odG1sKFwiXCIpO1xuICAgICAgICBmb3IgKGxldCBzb25nIGluIHNvbmdzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U29uZyA9IHNvbmdzW3NvbmddO1xuICAgICAgICAgICAgc29uZ0xpc3QuYXBwZW5kKGA8ZGl2IGlkPVwiJHtzb25nfVwiIGNsYXNzPVwic29uZ1wiPjxoMT4ke2N1cnJlbnRTb25nLnRpdGxlfTwvaDE+PHVsPjxsaT5cbiAgICAgICAgICAgIEFsYnVtOiAke2N1cnJlbnRTb25nLmFsYnVtfTwvbGk+PGxpPkFydGlzdDogJHtjdXJyZW50U29uZy5hcnRpc3R9PC9saT48L3VsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiXCIgY2xhc3M9XCJkZWxcIj5SZW1vdmU8L2J1dHRvbj48YnV0dG9uIHR5cGU9XCJcIiBjbGFzcz1cImVkaXRcIj5FZGl0PC9idXR0b24+PC9kaXY+YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogT24gcGFnZSBsb2FkLCBMaXN0TXVzaWNWaWV3IGlzIHNob3duICovXG5cbiAgICB2aWV3cy5saXN0TXVzaWNWaWV3KCk7XG5cbiAgICAvKiBmdW5jdGlvbiB0byBkZWxldGUgc29uZ3MgLS0gdXBvbiBjbGlja2luZyB0aGUgZGVsZXRlIGJ1dHRvbiB3aXRoaW4gYW55IHNvbmcsIGlmIHRoZSBpZCBvZiB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gZXF1YWxzIHRoZSBpZCBrZXkgaW4gdGhlIHNvbmdIb2xkZXIgYXJyYXksIGl0IHJlbW92ZXMgdGhhdCBpdGVtIGZyb20gdGhlIGFycmF5LiB0aGVuIGFwcGVuZHMgdGhlIG5ld2x5IG1vZGlmaWVkIGFycmF5IGJhY2sgaW50byB0aGUgRE9NLiAqL1xuXG5cbiAgICAkKCcjc29uZ0xpc3QnKS5jbGljayhlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbFwiKSkge1xuICAgICAgICAgICAgY29uc3Qgc29uZ0lkID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuaWQ7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9kYXp6bGluZy1maXJlLTM2MjkuZmlyZWJhc2Vpby5jb20vc29uZ3MvJHtzb25nSWR9Lmpzb25gLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCJcbiAgICAgICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBzb25nSWQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5pZDtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL2RhenpsaW5nLWZpcmUtMzYyOS5maXJlYmFzZWlvLmNvbS9zb25ncy8ke3NvbmdJZH0uanNvbmAsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkSG9sZCA9IHNvbmdJZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWRIb2xkKVxuICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1hcnRpc3QnKS52YWwoZGF0YS5hcnRpc3QpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1zb25nJykudmFsKGRhdGEudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1hbGJ1bScpLnZhbChkYXRhLmFsYnVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB2aWV3cy5lZGl0TXVzaWNWaWV3KCk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgICQoJyNzb25nRWRpdEJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZWRpdFRpdGxlID0gJCgnI2VkaXQtc29uZycpLnZhbCgpO1xuICAgICAgICBsZXQgZWRpdEFsYnVtID0gJCgnI2VkaXQtYWxidW0nKS52YWwoKTtcbiAgICAgICAgbGV0IGVkaXRBcnRpc3QgPSAkKCcjZWRpdC1hcnRpc3QnKS52YWwoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlrY2luZ1wiKVxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsIC8vIFVzZSBQT1NUIHdpdGggWC1IVFRQLU1ldGhvZC1PdmVycmlkZSBvciBhIHN0cmFpZ2h0IFBVVCBpZiBhcHByb3ByaWF0ZS5cbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIFNldCBkYXRhdHlwZSAtIGFmZmVjdHMgQWNjZXB0IGhlYWRlclxuICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9kYXp6bGluZy1maXJlLTM2MjkuZmlyZWJhc2Vpby5jb20vc29uZ3MvJHtpZEhvbGR9Lmpzb25gLCAvLyBBIHZhbGlkIFVSTFxuICAgICAgICAgICAgaGVhZGVyczoge1wiWC1IVFRQLU1ldGhvZC1PdmVycmlkZVwiOiBcIlBVVFwifSwgLy8gWC1IVFRQLU1ldGhvZC1PdmVycmlkZSBzZXQgdG8gUFVULlxuICAgICAgICAgICAgZGF0YTogYHtcInRpdGxlXCI6IFwiJHtlZGl0VGl0bGV9XCIsIFwiYXJ0aXN0XCI6IFwiJHtlZGl0QXJ0aXN0fVwiLCBcImFsYnVtXCI6IFwiJHtlZGl0QWxidW19XCJ9YCAvLyBTb21lIGRhdGEgZS5nLiBWYWxpZCBKU09OIGFzIGEgc3RyaW5nXG4gICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgJCgnI2VkaXQtYWxidW0nKS52YWwoXCJcIik7XG4gICAgICAgICAgICAkKCcjZWRpdC1zb25nJykudmFsKFwiXCIpO1xuICAgICAgICAgICAgJCgnI2VkaXQtYXJ0aXN0JykudmFsKFwiXCIpO1xuICAgICAgICAgICAgdmlld3MubGlzdE11c2ljVmlldygpO1xuICAgICAgICAgICAgbG9hZFBhZ2UoKTtcbiAgICB9KVxuICAgIH0pXG4gICAgLy8gJCgnI3NvbmdMaXN0JykuY2xpY2soZSA9PiB7XG4gICAgLy8gICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0XCIpKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBzb25nSWQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5pZDtcblxuICAgIC8vICAgICAgICAgJC5hamF4KHtcbiAgICAvLyAgICAgICAgICAgICB1cmw6IGBodHRwczovL2RhenpsaW5nLWZpcmUtMzYyOS5maXJlYmFzZWlvLmNvbS9zb25ncy8ke3NvbmdJZH0uanNvbmAsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAvLyAgICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHZpZXdzLmVkaXRNdXNpY1ZpZXcoKTtcbiAgICAvLyAgICAgICAgICAgICAkKCcjZWRpdC1hcnRpc3QnKS52YWwoc29uZy5hcnRpc3QpO1xuICAgIC8vICAgICAgICAgICAgIC8vIGxvYWRQYWdlKCk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuXG4gICAgJChcIiNzb25nQWRkQnRuXCIpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBuZXdTb25nID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtzb25nRmllbGQudmFsKCl9YCxcbiAgICAgICAgICAgIFwiYWxidW1cIjogYCR7YWxidW1GaWVsZC52YWwoKX1gLFxuICAgICAgICAgICAgXCJhcnRpc3RcIjogYCR7YXJ0aXN0RmllbGQudmFsKCl9YFxuICAgICAgICB9O1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9kYXp6bGluZy1maXJlLTM2MjkuZmlyZWJhc2Vpby5jb20vc29uZ3MvLmpzb25cIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3U29uZylcbiAgICAgICAgfSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICBhcnRpc3RGaWVsZC52YWwoXCJcIik7XG4gICAgICAgICAgICBzb25nRmllbGQudmFsKFwiXCIpO1xuICAgICAgICAgICAgYWxidW1GaWVsZC52YWwoXCJcIik7XG4gICAgICAgICAgICB2aWV3cy5saXN0TXVzaWNWaWV3KCk7XG4gICAgICAgICAgICBsb2FkUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qIEV2ZW50IGxpc3RlbmVycyBmb3IgVmlldyBmdW5jdGlvbnMgYWJvdmUgKi9cblxuXG4gICAgJChcIiNhZGRNdXNpY0J0blwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHZpZXdzLmFkZE11c2ljVmlldygpO1xuICAgIH0pO1xuXG5cbiAgICAkKFwiI2xpc3RNdXNpY0J0blwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHZpZXdzLmxpc3RNdXNpY1ZpZXcoKTtcbiAgICB9KTtcblxuICAgIHZhciBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2RhenpsaW5nLWZpcmUtMzYyOS5maXJlYmFzZWlvLmNvbS9zb25ncy8uanNvblwiLFxuICAgICAgICB9KS5kb25lKHNvbmdzID0+IHtcbiAgICAgICAgICAgIGFwcGVuZFNvbmdzKHNvbmdzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxvYWRQYWdlKCk7XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuICBsZXQgYWRkU29uZ3MgPSAkKFwiI2FkZFNvbmdzXCIpO1xuICBsZXQgeWVsbG93RGl2ID0gJChcIi55ZWxsb3dEaXZcIik7XG4gIGxldCBibHVlRGl2PSAkKFwiLmJsdWVEaXZcIik7XG4gIGxldCBlZGl0U29uZ3MgPSAkKCcjZWRpdFNvbmdzJyk7XG5cbiAgLy8gQ09ERSBGT1IgVklFVyBTRUxFQ1RJT05cblxuLyogTGlzdCBNdXNpYyBWaWV3IHNob3VsZCBiZSB0aGUgZGVmYXVsdCB2aWV3IGZvciB0aGUgYXBwLCB3aGljaCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBjb250YWluZWRcbmluIEpTT04gZmlsZXMsIGFuZCBhbiBhcmVhIGZvciB1c2VyIHRvIGZpbHRlciBzb25ncyBiYXNlZCBvbiBzZWxlY3RlZCBjcml0ZXJpYS4gKi9cblxubGV0IGxpc3RNdXNpY1ZpZXcgPSAoKSA9PiB7XG4gICAgYWRkU29uZ3MuaGlkZSgpO1xuICAgIGVkaXRTb25ncy5oaWRlKCk7XG4gICAgYmx1ZURpdi5zaG93KCk7XG4gICAgeWVsbG93RGl2LnNob3coKTtcbiAgfTtcblxuLyogQWRkIE11c2ljIFZpZXcgc2hvdWxkIGhpZGUgYWxsIHByaW1hcnkgY29udGVudCBhbmQgZGlzcGxheSBhIGZvcm0gd2hpY2ggdGhlIHVzZXIgY2FuIHV0aWxpdHplIHRvIFxuZW50ZXIgbmV3IHNvbmdzIGludG8gdGhlIGFwcC4gKi9cblxubGV0IGFkZE11c2ljVmlldyA9ICgpID0+IHtcbiAgICBlZGl0U29uZ3MuaGlkZSgpO1xuICAgIGFkZFNvbmdzLnNob3coKTtcbiAgICBibHVlRGl2LmhpZGUoKTtcbiAgICB5ZWxsb3dEaXYuaGlkZSgpO1xuICB9O1xuXG5sZXQgZWRpdE11c2ljVmlldyA9ICgpID0+IHtcbiAgICBlZGl0U29uZ3Muc2hvdygpO1xuICAgIGFkZFNvbmdzLmhpZGUoKTtcbiAgICBibHVlRGl2LmhpZGUoKTtcbiAgICB5ZWxsb3dEaXYuaGlkZSgpO1xufVxuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVkaXRNdXNpY1ZpZXcsXG4gICAgbGlzdE11c2ljVmlldyxcbiAgICBhZGRNdXNpY1ZpZXdcbiAgfTsiXX0=
