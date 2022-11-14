// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function(){ //shows current time at the top of the webpage 
	var d = new Date();
    var n = d.getDay()
	var y = d.getFullYear();
	var m = d.getMonth();
	
	
	/* Months */
	var month = new Array(); 
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
	var n = month[d.getMonth()];
	
	var dated = n +", " + m + ", "+y;
		
    /* 12 hours format */
	var TwentyFourHour = d.getHours();
    var hour = d.getHours();
   	if(hour > 12) { hour = hour - 12;}    
    if(hour==0){ hour=12; }
    
	/* AM and PM */
	var min = d.getMinutes();
	var mid = ' PM';
    if (min < 10) { min = "0" + min; }
	if(TwentyFourHour < 12) { mid = 'am'; }  
	
   document.getElementById("dated").innerHTML =dated +","+hour+':'+min + mid;
  
  
    });

    //-------------------------------------------------

    //show each time block as past, present or future 
    //variables from entire doc

    var pastBlock = document.getElementsByClassName ('past');
    var presentBlock = document.getElementsByClassName ('present');
    var futureBlock = document.getElementsByClassName ('future');
    var timeByHourArray = document.getElementById['hour-9','hour-10','hour-11','hour-12','hour-1','hour-2','hour-3','hour-4','hour-5'];
    var dated = n +", " + m + ", "+y;
    var d = new Date();
    var n = d.getDay()
	  var y = d.getFullYear();
	  var m = d.getMonth();
    
    //for loop to determine whather each hour is past, present or future

    $ (function (timeOfDay) {

    for (var i = 0; i < timeByHourArray.length; i++)

      if (i === dayjs().isBefore(dayjs('dated'))) {

        $(timeByHourArray[i]).removeClass('future', 'present');

        timeByHourArray[i].classList.remove("present","future");
      }
        

      if (i === dayjs().isSame(dayjs('dated'))) {

        $(timeByHourArray[i]).removeClass('past', 'future');

     
        timeByHourArray[i].classList.remove("past","future");
      
      }

      if (i === dayjs().isAfter(dayjs('dated'))) {

        $(timeByHourArray[i]).removeClass('past', 'present');

       
        timeByHourArray[i].classList.remove("past","present");
      
      return;
      }
    


      


    

    



    

//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
