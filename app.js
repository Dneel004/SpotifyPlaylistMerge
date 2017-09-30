var spotifyWebApi = require('spotify-web-api-node');
//var request = require('request');
//var accessCode = 'BQB1MMX2SyGMIgWbSikuBxb9ICF8PzfEDitlp_8UGc5l8xGQVryvY4LPXLNOpDmKVfUFtRqmKDWnOvkVpfQBPp1ZUpOQYuyCj2vz6h16qYRXIwKbruAfAiI5U1NxRCxea9PkzshKoOe63qjX3ytWaIaya37cHG53kyA';


var spotifyApi = new spotifyWebApi({
    clientId : '589b0a3f9e8b4d4583a0fb4d65f148a4',
    clientSecret : 'a3a243c336c7484eb1ef37a6b1398cf1'
});

spotifyApi.setAccessToken('BQB1MMX2SyGMIgWbSikuBxb9ICF8PzfEDitlp_8UGc5l8xGQVryvY4LPXLNOpDmKVfUFtRqmKDWnOvkVpfQBPp1ZUpOQYuyCj2vz6h16qYRXIwKbruAfAiI5U1NxRCxea9PkzshKoOe63qjX3ytWaIaya37cHG53kyA');


/*spotifyApi.clientCredentialsGrant()
.then(function(data) {
  console.log('The access token expires in ' + data.body['expires_in']);
  console.log('The access token is ' + data.body['access_token']);

  // Save the access token so that it's used in future calls
  spotifyApi.setAccessToken(data.body['access_token']);
}, function(err) {
  console.log('Something went wrong when retrieving an access token', err.message);
});
*/

spotifyApi.getMe()
.then(function(data) {
  console.log('Some information about the authenticated user', data.body);
}, function(err) {
  console.log('Something went wrong!', err);
});


