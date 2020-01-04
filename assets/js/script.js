$(document).ready(function(){

    
    var existingAppointments = {"9":"Standup call", "15":"Meeting with Max"};
    var retrievedAppointments = localStorage.getItem("existingAppointments");
    
    if (retrievedAppointments !== null){
        retrievedAppointments = JSON.parse(retrievedAppointments);
        console.log(retrievedAppointments);
    }
    else{
        console.log("no appointments");
        localStorage.setItem('existingAppointments', JSON.stringify(existingAppointments));
    }
    
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
    $("span").hide();
    
    var x = moment().format("H");
    x = parseInt(x);

    for(var i=0;i<9;i++){
        var y = $(".24hr").eq(i).text();
        y = parseInt(y);
        
        $(".description").eq(i).append($("<textarea>").text(retrievedAppointments[y]));
        
        if (y === x){
            $(".description").eq(i).addClass("present");
            $("textarea").eq(i).attr("disabled", true);
        }
        else if(y < x){
            $(".description").eq(i).addClass("past");
            $("textarea").eq(i).attr("disabled", true);
        }
        else {
            $(".description").eq(i).addClass("future");
            
        }
    }
    
    
    $(".saveBtn").on("click", saveChanges);
    function saveChanges(){
        if ($(this).siblings(".description").hasClass("future")){
            var newval = $(this).siblings(".description").children("textarea").val();
            var hr = $(this).siblings(".hour").children("span").text();
            
            existingAppointments[hr] = newval;
            localStorage.setItem('existingAppointments', JSON.stringify(existingAppointments));
        }
        else{
            return;
        }
        
    }
});