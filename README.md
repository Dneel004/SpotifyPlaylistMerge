![alt text](https://home-assistant.io/images/supported_brands/spotify.png)

https://devpost.com/software/spotify-playlist-merger

Inspiration:
We have been using Spotify for a few years now and we thought it was long overdue for there to be a merge option on Spotify.

What it Works:
Our merge option adds the contents of one playlist to another playlist.

How we built it:
We used the Node Spotify web API to communicate with the Spotify API. We used HTML5 to create a web interface that communicated with our Node.js server to get the Spotify playlist data. Once we had the playlist data, we chose the two playlist we wanted to merge.

Challenges we ran into:
In the beginning, we had trouble communicating to the Spotify API. We ran into a lot of formatted issues, trying to get it to look perfect.

What we learned:
Some of us learned Javascript basics, others learned more advanced Javascript functions. We learned how to play to our strengths, and how to collaborate efficiently.

What's next for Spotify Playlist Merger:
We are gonna add the option to merge more than 2 playlist at a time.
Andriod + IOS integration

Built With
javascript
node.js
html5
css3

How to use Playlist Merger:

1) go to a terminal and type cd C:\Users\Daniel\programming\SpotifyPlaylistMerge\token\web-api-auth-examples\authorization_code
2) start the node file by going back to terminal and type node app.js
3) go to a web browser and go to localhost:8888
4) click sign in, use spotify credintials, and go to where address is on the top and it should say 
   something like: http://localhost:8888/#access_token=
5) copy the access token, go to the app.js file in the main node.js code
6) on line 28 put your access go in for the function spotifyApi.setAccessToken(token here);
7) on line 34 put your spotify username for the parameter spotifyApi.getUserPlaylists(username here)
8) on line 45 put your username like in step 7 and you have to put your playlists uri link. (look at step 9)
9) go to localhost:8888 click where it says Spotify URI and go to a playlist you want to use, right click it and it will say copy          playlist link. 
10) put that link in function parameter like so: spotifyApi.getPlaylist(username, playlist link)
11) do the same in line 67 for the function spotifyApi.addTracksToPlaylist(username, playlist link to merge into, songList)
12) now you are ready to start the node.js server and then go to a web browser and type localhost:3000

Now you are ready to MERGE!!!

Before you use Spotify playlist merge you will have to get a new access code like in steps 1-6
If you would like to add on to the project you are more than welcome too. 
Submit those pull request!



