(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let songHolder = [];

$(document).ready(function() {

// Variables to be used later in file

  let addSongs = $("#addSongs");
  let yellowDiv = $(".yellowDiv");
  let blueDiv= $(".blueDiv");
  let moreDiv = $("#moreDiv");
  let songList = $("#songList");
  let albumField = $("#album");
  let artistField = $("#artist");
  let songField = $("#song");
  let songAddBtn = $("#songAddBtn");

  
// CODE FOR VIEW SELECTION

/* List Music View should be the default view for the app, which displays information contained
in JSON files, and an area for user to filter songs based on selected criteria. */

  function listMusicView(){
    addSongs.hide();
    blueDiv.show();
    yellowDiv.show();
    moreDiv.show();
  }

/* Add Music View should hide all primary content and display a form which the user can utilitze to 
enter new songs into the app. */

  function addMusicView() {
    addSongs.show();
    blueDiv.hide();
    yellowDiv.hide();
    moreDiv.hide();
  }

/* When new json files are loaded, their contents are given an id and pushed into the song holder array and then the append function is run to populate the DOM. */

  function pushSongs(songs){
    songs.songs.forEach(function(i) {
      i.id = songList.length++;
      songHolder.push(i);
    });
    appendSongs();
    console.log(songHolder);
  }

// function that is responsible for appending each item in songHolder array to the DOM. clears the DOM and then 
// populates with current array.

  function appendSongs() {
    songList.html("");
    songHolder.forEach(function(i){
      songList.append(`<div id="${i.id}"><h1>${i.title}</h1><ul><li>${i.album}</li><li>${i.artist}</li></ul><button type="" class="del">Remove</button></div>`);
    });
  }

/* On page load, ListMusicView is shown */

  listMusicView();

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
    $('#artist').val("");
    $('#song').val("");
    $('#album').val("");
    appendSongs();
  });

/* Event listeners for View functions above */
  

  $("#addMusicBtn").click(function() {
    addMusicView();
  });


  $("#listMusicBtn").click(function() {
    listMusicView();
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCBzb25nSG9sZGVyID0gW107XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4vLyBWYXJpYWJsZXMgdG8gYmUgdXNlZCBsYXRlciBpbiBmaWxlXG5cbiAgbGV0IGFkZFNvbmdzID0gJChcIiNhZGRTb25nc1wiKTtcbiAgbGV0IHllbGxvd0RpdiA9ICQoXCIueWVsbG93RGl2XCIpO1xuICBsZXQgYmx1ZURpdj0gJChcIi5ibHVlRGl2XCIpO1xuICBsZXQgbW9yZURpdiA9ICQoXCIjbW9yZURpdlwiKTtcbiAgbGV0IHNvbmdMaXN0ID0gJChcIiNzb25nTGlzdFwiKTtcbiAgbGV0IGFsYnVtRmllbGQgPSAkKFwiI2FsYnVtXCIpO1xuICBsZXQgYXJ0aXN0RmllbGQgPSAkKFwiI2FydGlzdFwiKTtcbiAgbGV0IHNvbmdGaWVsZCA9ICQoXCIjc29uZ1wiKTtcbiAgbGV0IHNvbmdBZGRCdG4gPSAkKFwiI3NvbmdBZGRCdG5cIik7XG5cbiAgXG4vLyBDT0RFIEZPUiBWSUVXIFNFTEVDVElPTlxuXG4vKiBMaXN0IE11c2ljIFZpZXcgc2hvdWxkIGJlIHRoZSBkZWZhdWx0IHZpZXcgZm9yIHRoZSBhcHAsIHdoaWNoIGRpc3BsYXlzIGluZm9ybWF0aW9uIGNvbnRhaW5lZFxuaW4gSlNPTiBmaWxlcywgYW5kIGFuIGFyZWEgZm9yIHVzZXIgdG8gZmlsdGVyIHNvbmdzIGJhc2VkIG9uIHNlbGVjdGVkIGNyaXRlcmlhLiAqL1xuXG4gIGZ1bmN0aW9uIGxpc3RNdXNpY1ZpZXcoKXtcbiAgICBhZGRTb25ncy5oaWRlKCk7XG4gICAgYmx1ZURpdi5zaG93KCk7XG4gICAgeWVsbG93RGl2LnNob3coKTtcbiAgICBtb3JlRGl2LnNob3coKTtcbiAgfVxuXG4vKiBBZGQgTXVzaWMgVmlldyBzaG91bGQgaGlkZSBhbGwgcHJpbWFyeSBjb250ZW50IGFuZCBkaXNwbGF5IGEgZm9ybSB3aGljaCB0aGUgdXNlciBjYW4gdXRpbGl0emUgdG8gXG5lbnRlciBuZXcgc29uZ3MgaW50byB0aGUgYXBwLiAqL1xuXG4gIGZ1bmN0aW9uIGFkZE11c2ljVmlldygpIHtcbiAgICBhZGRTb25ncy5zaG93KCk7XG4gICAgYmx1ZURpdi5oaWRlKCk7XG4gICAgeWVsbG93RGl2LmhpZGUoKTtcbiAgICBtb3JlRGl2LmhpZGUoKTtcbiAgfVxuXG4vKiBXaGVuIG5ldyBqc29uIGZpbGVzIGFyZSBsb2FkZWQsIHRoZWlyIGNvbnRlbnRzIGFyZSBnaXZlbiBhbiBpZCBhbmQgcHVzaGVkIGludG8gdGhlIHNvbmcgaG9sZGVyIGFycmF5IGFuZCB0aGVuIHRoZSBhcHBlbmQgZnVuY3Rpb24gaXMgcnVuIHRvIHBvcHVsYXRlIHRoZSBET00uICovXG5cbiAgZnVuY3Rpb24gcHVzaFNvbmdzKHNvbmdzKXtcbiAgICBzb25ncy5zb25ncy5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGkuaWQgPSBzb25nTGlzdC5sZW5ndGgrKztcbiAgICAgIHNvbmdIb2xkZXIucHVzaChpKTtcbiAgICB9KTtcbiAgICBhcHBlbmRTb25ncygpO1xuICAgIGNvbnNvbGUubG9nKHNvbmdIb2xkZXIpO1xuICB9XG5cbi8vIGZ1bmN0aW9uIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGFwcGVuZGluZyBlYWNoIGl0ZW0gaW4gc29uZ0hvbGRlciBhcnJheSB0byB0aGUgRE9NLiBjbGVhcnMgdGhlIERPTSBhbmQgdGhlbiBcbi8vIHBvcHVsYXRlcyB3aXRoIGN1cnJlbnQgYXJyYXkuXG5cbiAgZnVuY3Rpb24gYXBwZW5kU29uZ3MoKSB7XG4gICAgc29uZ0xpc3QuaHRtbChcIlwiKTtcbiAgICBzb25nSG9sZGVyLmZvckVhY2goZnVuY3Rpb24oaSl7XG4gICAgICBzb25nTGlzdC5hcHBlbmQoYDxkaXYgaWQ9XCIke2kuaWR9XCI+PGgxPiR7aS50aXRsZX08L2gxPjx1bD48bGk+JHtpLmFsYnVtfTwvbGk+PGxpPiR7aS5hcnRpc3R9PC9saT48L3VsPjxidXR0b24gdHlwZT1cIlwiIGNsYXNzPVwiZGVsXCI+UmVtb3ZlPC9idXR0b24+PC9kaXY+YCk7XG4gICAgfSk7XG4gIH1cblxuLyogT24gcGFnZSBsb2FkLCBMaXN0TXVzaWNWaWV3IGlzIHNob3duICovXG5cbiAgbGlzdE11c2ljVmlldygpO1xuXG4gIC8qIGZ1bmN0aW9uIHRvIGRlbGV0ZSBzb25ncyAtLSB1cG9uIGNsaWNraW5nIHRoZSBkZWxldGUgYnV0dG9uIHdpdGhpbiBhbnkgc29uZywgaWYgdGhlIGlkIG9mIHRoZSBwYXJlbnQgb2YgdGhlIGJ1dHRvbiBlcXVhbHMgdGhlIGlkIGtleSBpbiB0aGUgc29uZ0hvbGRlciBhcnJheSwgaXQgcmVtb3ZlcyB0aGF0IGl0ZW0gZnJvbSB0aGUgYXJyYXkuIHRoZW4gYXBwZW5kcyB0aGUgbmV3bHkgbW9kaWZpZWQgYXJyYXkgYmFjayBpbnRvIHRoZSBET00uICovXG5cbiAgc29uZ0xpc3QuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdCA9PSBcImRlbFwiKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc29uZ0hvbGRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihzb25nSG9sZGVyW2ldLmlkID09IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcbiAgICAgICAgICBzb25nSG9sZGVyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXBwZW5kU29uZ3MoKTtcbiAgICB9XG4gIH0pO1xuXG5cbiQoXCIjc29uZ0FkZEJ0blwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBzb25nSG9sZGVyLnB1c2goe1xuICAgICAgYXJ0aXN0OiBgJHskKCcjYXJ0aXN0JykudmFsKCl9YCxcbiAgICAgIHRpdGxlOiBgJHskKCcjc29uZycpLnZhbCgpfWAsXG4gICAgICBhbGJ1bTogYCR7JCgnI2FsYnVtJykudmFsKCl9YCxcbiAgICAgIGlkOiBgJHtzb25nTGlzdC5sZW5ndGgrK31gXG4gICAgfSk7XG4gICAgJCgnI2FydGlzdCcpLnZhbChcIlwiKTtcbiAgICAkKCcjc29uZycpLnZhbChcIlwiKTtcbiAgICAkKCcjYWxidW0nKS52YWwoXCJcIik7XG4gICAgYXBwZW5kU29uZ3MoKTtcbiAgfSk7XG5cbi8qIEV2ZW50IGxpc3RlbmVycyBmb3IgVmlldyBmdW5jdGlvbnMgYWJvdmUgKi9cbiAgXG5cbiAgJChcIiNhZGRNdXNpY0J0blwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBhZGRNdXNpY1ZpZXcoKTtcbiAgfSk7XG5cblxuICAkKFwiI2xpc3RNdXNpY0J0blwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBsaXN0TXVzaWNWaWV3KCk7XG4gIH0pO1xuXG5cbiAgJChcIiNhZGRNb3JlXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogXCJzb25nczIuanNvblwiLFxuICAgICAgc3VjY2VzczogcHVzaFNvbmdzXG4gICAgfSk7XG4gICAgJChcIiNhZGRNb3JlXCIpLmhpZGUoKTtcbiAgfSk7XG5cbiAgXG4gICQuYWpheCh7XG4gICAgdXJsOiBcInNvbmdzMS5qc29uXCIsXG4gICAgc3VjY2VzczogcHVzaFNvbmdzXG4gIH0pO1xuXG59KTsiXX0=
