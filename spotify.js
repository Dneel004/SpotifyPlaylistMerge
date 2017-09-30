var spotifyWebApi = require('spotify-web-api-node');
//var request = require('request');
//var accessCode = 'BQB1MMX2SyGMIgWbSikuBxb9ICF8PzfEDitlp_8UGc5l8xGQVryvY4LPXLNOpDmKVfUFtRqmKDWnOvkVpfQBPp1ZUpOQYuyCj2vz6h16qYRXIwKbruAfAiI5U1NxRCxea9PkzshKoOe63qjX3ytWaIaya37cHG53kyA';


var spotifyApi = new spotifyWebApi({
    clientId : '589b0a3f9e8b4d4583a0fb4d65f148a4',
    clientSecret : 'a3a243c336c7484eb1ef37a6b1398cf1'
});

spotifyApi.setAccessToken('BQAOf0nmIvCGjGfariLqurYOU7qKZAslrN3PNhW0HZ9YzA1DMXRlIFjarwRkFN2Bc9igJjBgIREhwAO8SyQY0A0AflRXzXQ1CMANgSNtaGllvEVelETYjaNylLWFbj1PKAGKp1L2TGbCAB3tAjDcrWoWG_G39h3-ins');


//get songs from playlist you want to merge
var songList = [];
spotifyApi.getPlaylist('1262015481', '6LbQgqzk153k70Ot3hwhYz')
.then(function(data) {
  for(i = 0; i < data.body.tracks.items.length; i++){
  console.log('Name: ', data.body.tracks.items[i].track.name);
  console.log('uri: ', data.body.tracks.items[i].track.uri);
  console.log('');
  songList.push(data.body.tracks.items[i].track.uri);
  }
  console.log(songList);
}, function(err) {
  console.log('Something went wrong!', err);
});

/*
//add songs to playlist you want to merge into
spotifyApi.addTracksToPlaylist('1262015481', '7w0XZI3Jgm8Ta4HjI2T0Td', songList)
  .then(function(data) {
  console.log('Added tracks to playlist!');
}, function(err) {
  console.log('Something went wrong!', err);
});*/