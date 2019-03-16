# web-app-youtubetomp3 

## What's this?

Get mp3 from youtube videos by entering a link.  
<br/>
Uses sindats-youtube-mp3 npm package - https://github.com/sindat/youtubetomp3downloader

## How it works

Website.js contains the HTTP call for the API, which is stored in ./API .  
<br/>

The API contains app.js - it is an ExpressJS app, which creates an instance of a function 
pulled from the npm package's library.

## How to set it up

In app.js, enter the parameters the function requires. It required **3 parameters** :  
* location of the ffmpeg binary - you need to download ffmpeg (it's the converter)
* location where you want to save the file
* an API key for the Youtube API

<br/>

Additionally, you need:
* nodeJS to run the app.js
* an apache server to run this app on localhost

<br/>

## Looks like too many requirements?

Yep. Cause it's not finished yet lol, here's what I will implement as time passes by:
* I will publish the site on a public domain - probably banter.cz
* I will fix the front end - currently it's broken and only takes your youtube video link and nothing else 
* I will make a popup save file prompt so you dont have to manually enter anything 