$(document).ready(function(){

    //current day is shown in the p tag with id #currentDay and span is used to store the military time
    //for calculation purposes and is hidden
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
    $("span").hide();
    
    //creating a localstorage object with time as key and appointments as corresponding values
    var existingAppointments = {};
    // var existingAppointments = {"9":"Standup call", "15":"Meeting with Max"};
    var retrievedAppointments = localStorage.getItem("existingAppointments");
    
    //retrieving the stored objects
    if (retrievedAppointments !== null){
        retrievedAppointments = JSON.parse(retrievedAppointments);
    }
    else{
        localStorage.setItem("existingAppointments", JSON.stringify(existingAppointments));
    }
    
    //to render the appointments 
    renderAppointments();
    
    function renderAppointments(){
        //storing the current hour in military format
        var currentMilitaryHr = moment().format("H");
        //changing to number for comparison
        currentMilitaryHr = parseInt(currentMilitaryHr);

        //looping through the time from 9 to 5 (8 work hours)
        for(var i=0;i<9;i++){
            //getting the stored military hour from the span element using its class .24hr
            var storedMilitayHr = $(".24hr").eq(i).text();
            //changing to number for comparison
            storedMilitayHr = parseInt(storedMilitayHr);
            
            //creating textarea for each hour and printing the stored appointments resp
            $(".description").eq(i).append($("<textarea>").text(retrievedAppointments[storedMilitayHr]));
            
            //if both the time are equal, adding the class "present" to have the red color and disabling the 
            //textarea so that it is not editable
            if (storedMilitayHr === currentMilitaryHr){
                $(".description").eq(i).addClass("present");
                $("textarea").eq(i).attr("disabled", true);
            }
            //if the currentMilitaryHr passed the storedMilitaryHr, adding the class "past" to have the grey 
            //color and disabling the textarea so that it is not editable
            else if(storedMilitayHr < currentMilitaryHr){
                $(".description").eq(i).addClass("past");
                $("textarea").eq(i).attr("disabled", true);
            }
            //else adding the class "future" to have the green color and these are textareas remain editable
            else {
                $(".description").eq(i).addClass("future");
                
            }
        }
    }
    
    //addlistener for the saveBtn and calling saveChanges() function
    $(".saveBtn").on("click", saveChanges);

    function saveChanges(){
        //if the sibling of the saveBtn (the div with .description) has class "future", save the content
        if ($(this).siblings(".description").hasClass("future")){
            
            //getting the changed appointment details and the corresponding elements using DOM elements
            var changedAppointmentVal = $(this).siblings(".description").children("textarea").val();
            var changedAppointmentHr = $(this).siblings(".hour").children("span").text();
            
            //Storing the values in the retrievedAppointments object
            retrievedAppointments[changedAppointmentHr] = changedAppointmentVal;
            
            //storing in the localstorage existingAppointments using JSON.stringify
            localStorage.setItem("existingAppointments", JSON.stringify(retrievedAppointments));
        }
        else{
            return;
        }
        
    }
});