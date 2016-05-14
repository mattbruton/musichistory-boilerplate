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