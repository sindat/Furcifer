# web-app-youtubetomp3 - ver 1.0.1
Convert youtube videos to mp3 and download it. 

#Guide on usage - example of running this on your personal apache web server

1) open up git command line
2) cd into [your apache folder]/htdocs
3) git clone https://github.com/sindat/web-app-youtubetomp3/
4) make a folder where you will place the API code 
5) download nodeJS if you havent already 
6) open the npm command line
7) cd into the API folder that youve created within the npm command line and type npm install sindats-mp3-downloader --save
8) move the MOVETOYOURAPIFOLDER.js to your API folder and name it how you want, this will be the file used in the API call
9) specify the name of that file in your API call in the api_trigger.js

#How it works

The API call you make fetches all the data that you specified in it, especially where you will save the converted mp3 file. 

Currently in testing phase, I will add an option to select where you want to save it, and the API call will just fetch the required data
like the name, thumbnail, quality etc 

Patch history

1.0.1. - created the base express API structure, including routing, will be tested
