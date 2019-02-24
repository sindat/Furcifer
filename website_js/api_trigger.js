$(document).ready(function(){
    $('#theForm').submit(function(event){
        event.preventDefault();

        // what the user entered - video link - need to extract the video ID from the whole link
        var enteredVideoLink = $('#youtubeVideoLink').val();
        enteredVideoLink = enteredVideoLink.split('v=')[1];
        var limiter = enteredVideoLink.indexOf('&');
        if (limiter != -1){
            enteredVideoLink = enteredVideoLink.substring(0, limiter);
        }
        //console.log(enteredVideoLink);

        // THE AJAX CALL FOR MY API
        $.ajax({
            dataType: "jsonp",
            // rename this depending on how you name the API file
            url: "http://localhost:3000/API/youtubetomp3/" + enteredVideoLink,
            success: function (ApiJsonObject){
                console.log(ApiJsonObject);
                $('#appendToMe').append("<div id='songFound' class='col p-2 my-3 mx-1 text-center'><h1>" +
                ApiJsonObject.videoTitle + "</h1>" +
                "<img src='" + ApiJsonObject.videoThumbnail + "'class='img-fluid mx-auto d-block'>" +
                "</div>");
          
                  
            }
        });
        
    });
});