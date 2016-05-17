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