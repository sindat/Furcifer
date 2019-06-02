/************* TYPICAL EXPRESSJS FILE STRUCTURE
Dependencies : A set of statements to import dependencies

Instantiations : A set of statements to create objects

Configurations : A set of statements to configure system and custom settings

Middleware : A set of statements that is executed for every incoming request

Routes : A set of statements that defines server routes, endpoints, and pages

Bootup : A set of statements that starts the server and makes it listen on a specific port for incoming requests

 */

// DEPENDENCIES
const youtubetomp3 = require('furcifer-server-core'); // this is the main code 
const express = require('express');

// INSTANTIATIONS
const app = express();

// CONFIGURATIONS
app.set('port', process.env.PORT || 3000);


// ROUTES
app.get('/API/youtubetomp3/:videoID', function(request, response){
   
   let videoID = request.params.videoID;
    
   let DOWNLOADER = new youtubetomp3({
      "apiKey" : "AIzaSyC-eBlpk6ksj-x9KWdje0nVHBue-U-T5_k",
      "ffmpegPath": "C:/ffmpeg/bin/ffmpeg.exe",        
      // will be specified later by the user - file save popup window etc 
      "fileSavePath": "C:/Users/i506417/music/"
   });

    
   
   // DOWNLOAD & SAVE ON DISK 
   DOWNLOADER.download(videoID, function(returnedJsonObject){
      console.log(returnedJsonObject);
      response.jsonp(returnedJsonObject);
   });  



});

// BOOTUP
var server = app.listen(app.get('port'), function(){
   console.log('Express is running on your server, listening on port ' + server.address().port);
});