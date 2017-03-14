$(document).ready(function(){
    $("#ccd").click(function(){
        $("#banner").velocity("scroll", {
          container: $("body"),
          duration: 800,
          delay: 500
        });
    });
});
