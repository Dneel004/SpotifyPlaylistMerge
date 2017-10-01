

var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');


//app.listen(3000);

app.use(express.static('public'));
//Server Setup
http.listen(3000, function(){
  console.log('Server initiated');
});


var spotifyWebApi = require('spotify-web-api-node');


var spotifyApi = new spotifyWebApi({
    clientId : '589b0a3f9e8b4d4583a0fb4d65f148a4',
    clientSecret : 'a3a243c336c7484eb1ef37a6b1398cf1'
});

spotifyApi.setAccessToken('BQCkhf2Tqwr1-q0tdSoKul7Jky32cOWKEK0rmO3p5Nw2Ev_d-x59TLBmPM2q9dIJvYLLTDK7mEw73iPKndbStslzH313J4utjx9t-gx1QH-yg_tB4EFBoA-Tj9uvAcNNnJjAwjad6g1izajHR_OnRgN7NeDyOzTYTOQwmY_k8gEqudNcyrWWcqIMapTE42Jcb2jCATO6T9uvut4');


//get songs from playlist you want to merge
var songList = [];
var playlists = [];
  spotifyApi.getUserPlaylists('1262015481')
  .then(function(data) {
    for(i = 0; i < data.body.items.length; i++){
      //console.log('Retrieved playlists', data.body.items[i].name);
      playlists.push(data.body.items[i].uri)
    }
    //console.log(playlists);
  },function(err) {
    console.log('Something went wrong!', err);
  });
  
  spotifyApi.getPlaylist('1262015481', '3bQuJboL920yHdOYzP3pZt')
  .then(function(data) {
    for(i = 0; i < data.body.tracks.items.length; i++){
    //console.log('Name: ', data.body.tracks.items[i].track.name);
    //console.log('uri: ', data.body.tracks.items[i].track.uri);
    //console.log('');
    songList.push(data.body.tracks.items[i].track.uri);
    }
    //console.log(songList);
    return songList;
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  
  io.on('connection', function (socket) {
    console.log('A user connected');
    socket.on('clicked', function () {
      console.log('clicked!!!!');
      setTimeout(function(){
        //console.log(playlists);
        //MERGE TO PLAYLIST
        spotifyApi.addTracksToPlaylist('1262015481', '7w0XZI3Jgm8Ta4HjI2T0Td', songList)
        .then(function(data) {
          console.log('Added tracks to playlist!');
        }, function(err) {
          console.log('Something went wrong!', err);
        });
      },2000);
    });
  });