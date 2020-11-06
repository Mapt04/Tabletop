$(document).ready(function()
{
    createBoard();

    $(".square").click(function(){
        
        $(this).css("background-image", "url('./images/bK.png')")
    })

    $(".square").dblclick(function(){
        $(this).css("background-color", "#606B2E")
    });

});
