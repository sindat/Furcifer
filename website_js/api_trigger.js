$(document).ready(function(){
    $('#theForm').submit(function(event){
        event.preventDefault();

        $.ajax({
            dataType: "json",
            url: "localhost/API/youtubeToMp3",
            success: function (ApiJsonObject){
                // fetch stuff from the JSON
            }
        });
    });
});