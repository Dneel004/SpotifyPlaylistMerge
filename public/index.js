var imgArray = [
    'https://media.giphy.com/media/3oEduXeT0j1Bl5uWHK/giphy.gif',
    'http://s2.favim.com/orig/36/concert-crowd-fireworks-gif-lights-Favim.com-292862.gif',
    'https://media.tenor.com/images/e64f42efb6b60b9ab72ddca87e138072/tenor.gif',
'https://i.giphy.com/media/cVFIdhHY43Mqc/giphy.webp'];
    var curIndex = 0;
    var imgDuration = 3000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";

    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    },300);
    curIndex++;
    if (curIndex == imgArray.length) 
    { 
      curIndex = 0; 
    }
    setTimeout(slideShow, imgDuration);
  
}
slideShow();



//Spotify stuff starting here
var socket = io();
function clicker(){
    alert('2017289');
    console.log('hi');
    socket.emit('clicked');
}
var mergeButton=document.getElementById('merge-button');
mergeButton.addEventListener("click", clicker);