# Furcifer - the YoutubeToMp3 downloader

## May Update

Revamping this project for Cloud depployment and incorporated AI.

## What can this do?  

Convert a youtube video to an .mp3 after providing the full video link - you have to manually specify a couple things, via notes below.

## What's this?

Get mp3 from youtube videos by entering a link.  

## Base structure 

Website.js contains the API call code. The rest is Frontend stuff.  

API uses ExpressJS routing.  

## Where is the code ?  

The class definition and functions are all pulled from my npm package, which needs to be installed via npm.  
Link - https://github.com/sindat/youtubetomp3downloader  

## How to set it up - will be automatized with Docker  

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
