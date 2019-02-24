/************* TYPICAL EXPRESSJS FILE STRUCTURE
Dependencies : A set of statements to import dependencies

Instantiations : A set of statements to create objects

Configurations : A set of statements to configure system and custom settings

Middleware : A set of statements that is executed for every incoming request

Routes : A set of statements that defines server routes, endpoints, and pages

Bootup : A set of statements that starts the server and makes it listen on a specific port for incoming requests

 */

// DEPENDENCIES
var youtubetomp3 = require('sindats-youtube-mp3'), // this is the main code 
   express = require('express'),
   path = require('path'),
   logger = require('morgan'),
   //favicon = require('serve-favicon'),
   errorhandler = require('errorhandler');

// INSTANTIATIONS
var app = express();
var router = express.Router();

// CONFIGURATIONS
app.set('view engine', 'pug'); //default
app.set('port', process.env.PORT || 3000);

// MIDDLEWARE
app.use(logger('combined'));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(express.static('public'));

/************************************
 * this is what the generated .json object will look like
 *  it will be generated using the video ID parameter from the client
 * now manually setting the file save path, but later will make a classic popup window with file save prompt
 * this object has to be generated in this format by the underlying code 
************************************/
var downloaderOutput = {
   "U3p5jPCheEg": {
      "videoID": "U3p5jPCheEg",
      "fileName": "C:\Users\davos\Music\Casino Inc. - 13 X & Y", 
      "videoUrl": "https://www.youtube.com/watch?v=U3p5jPCheEg",
      "videoTitle": "Casino Inc. - 13 X & Y",
      "artist": "Casino Inc.",
      "title": "X & Y",
      "videoThumbnail": "https://img.youtube.com/vi/U3p5jPCheEg/default.jpg"
   }  
};

// ROUTES
app.get('/API/youtubetomp3/:videoID', function(request, response, next){
   var videoID = request.params.videoID;
   //response.render('videodata', downloaderOutput[videoID]);
   // THIS IS THE JSON OBJECT BEING RETURNED 
   response.jsonp(downloaderOutput[videoID]);
});

// BOOTUP
var server = app.listen(app.get('port'), function(){
   console.log('Express is running on your server, listening on port ' + server.address().port);
});


 