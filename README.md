# Day-Planner
https://smaji08.github.io/Day-Planner/

This application was developed using Bootstrap 4.3.1, HTML5, CSS3, JavaScript, JQuery, Moment.js library and DOM API.

### Overview
Creating a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### Features
The app displays standard business hours (9 a.m. to 5 p.m.). Each time slot represents one hour and contains the following:

- The time
- A field to hold user input
- A save button

Clicking on the save button will store the time and user input in localStorage.
Near the top of the calendar, the application displays the current day. Additionally, each hour is color coded to reflect whether the time slot is in the past (grey), the present (red), or the future (green). This will change depending on the time of day.

### My Experience
The timeslots are displayed using html elements. Used military hours for comparison. For displaying date and getting the hour element, used Moment.js library.

Used Jquery DOM API methods to capture the changes or additions of appointments. The time and corresponding appointments are stored as objects in localStorage with time as the key and the user input as value.

The challenging part for me was figuring out the correct Jquery DOM elements.

### Credits
1. http://stackoverflow.com/
2. https://www.w3schools.com/
3. https://gomakethings.com/