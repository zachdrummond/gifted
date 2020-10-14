$(document).ready(function(){
    
    $("#login").on("click", function(event){
        event.preventDefault();
        $("#email").val()
    });

    $("#giftsYouReceivedBtn").on("click", function(event){
        event.preventDefault();
        console.log("giftsYouReceivedBtn");
    });

    $("#giftsYouSentBtn").on("click", function(event){
        event.preventDefault();
        console.log("giftsYouSentBtn");
    });

});