$(document).ready(function(){
    $('#theForm').submit(function(event){
        event.preventDefault();

        $.ajax({
            dataType: "json",
            // rename this depending on how you name the API file
            url: "localhost/API/MOVETOYOURAPIFOLDER.js",
            success: function (ApiJsonObject){
                // fetch stuff from the JSON
                // contains stuff like where you wanna save it, quality of the video, thumbnail etc.
            }
        });
    });
});