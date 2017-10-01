var spotifyWebApi = require('spotify-web-api-node');


var spotifyApi = new spotifyWebApi({
    clientId : '589b0a3f9e8b4d4583a0fb4d65f148a4',
    clientSecret : 'a3a243c336c7484eb1ef37a6b1398cf1'
});

spotifyApi.setAccessToken('BQDoaGhMECFBwv1AwSpES7BqrHw2bwJNQtmlN0N4FJOQYCKN9iOuqioij3MTT6klUUrEPQdHBakGxYVmUB1pTwFbRw9BFaLVwkGfKAB7QpikdAWUbF4ZeEBKcT7Zd1h9ZdQXoDEFpFWiWu5lf3zIC4OczZzRGIb88l2ubeCmjIeQJcX70aHqAQsmLGhdm9bEkTt2lE6hPesB3x8');


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
  
  spotifyApi.getPlaylist('1262015481', '6LbQgqzk153k70Ot3hwhYz')
  .then(function(data) {
    for(i = 0; i < data.body.tracks.items.length; i++){
    //console.log('Name: ', data.body.tracks.items[i].track.name);
    //console.log('uri: ', data.body.tracks.items[i].track.uri);
    //console.log('');
    songList.push(data.body.tracks.items[i].track.uri);
    }
    console.log(songList);
    return songList;
  }, function(err) {
    console.log('Something went wrong!', err);
  });


   setTimeout(function(){
    console.log(playlists);
    //MERGE TO PLAYLIST
    spotifyApi.addTracksToPlaylist('1262015481', '7w0XZI3Jgm8Ta4HjI2T0Td', songList)
    .then(function(data) {
      console.log('Added tracks to playlist!');
    }, function(err) {
      console.log('Something went wrong!', err);
    });
    
  },3000); 
  
    