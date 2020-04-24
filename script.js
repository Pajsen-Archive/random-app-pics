function time ()  {
window.setInterval(function(){ // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if(date.getHours() === 13 && date.getMinutes() === 37){ // Check the time
        // Do stuff
      console.log("Hello")
    }
}, 60000); // Repeat every 60000 milliseconds (1 minute)

}



function time1 ()  {
window.setInterval(function(){ // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if(date.getHours() === 9 && date.getMinutes() === 37){ // Check the time
        // Do stuff
      console.log("Hello")
    }
}, 60000); // Repeat every 60000 milliseconds (1 minute)

}
