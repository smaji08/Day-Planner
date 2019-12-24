$(document).ready(function(){

    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
    $("span").hide();
    
    var x = moment().format("H");
    x = parseInt(x);

    for(var i=0;i<9;i++){
        var y = $(".24hr").eq(i).text();
        y = parseInt(y);

        if (y === x){
            $(".description").eq(i).addClass("present");
        }
        else if(y < x){
            $(".description").eq(i).addClass("past");
        }
        else {
            $(".description").eq(i).addClass("future");
        }
    }
    
});