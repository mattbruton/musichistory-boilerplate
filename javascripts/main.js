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