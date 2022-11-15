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

    var timeByHourArray = ['#hour-9','#hour-10','#hour-11','#hour-12','#hour-1','#hour-2','#hour-3','#hour-4','#hour-5'];
    var dated = n +", " + m + ", "+y;
    var d = new Date();
    var n = d.getDay()
	  var y = d.getFullYear();
	  var m = d.getMonth();
    
    //for loop to determine whather each hour is past, present or future

    $ (function (timeOfDay) {

        console.log(dated)
        console.log(dayjs().hour(12).$H)

        //.attr("data-id"); select

    for (var i = 0; i < timeByHourArray.length; i++) {
console.log ($(timeByHourArray[i]).attr('data-timeformat'))

      if (parseInt($(timeByHourArray[i]).attr('data-timeformat')) > dayjs().hour()) {

        $(timeByHourArray[i]).removeClass('past present');
        
      }
        

      if (parseInt($(timeByHourArray[i]).attr('data-timeformat')) === dayjs().hour()) {

        $(timeByHourArray[i]).removeClass('past future');

      }

      if (parseInt($(timeByHourArray[i]).attr('data-timeformat')) < dayjs().hour()) {

        $(timeByHourArray[i]).removeClass('present future');

      }
    }
   //-------------------------------------------------------------
    
   var textArea =  document.querySelectorAll("time-block");
   
   var saveBtn = document.querySelectorAll('saveBtn');

   
   
    saveBtn.addEventListener("click", function() {
    var textAreaInput = textArea.value;
    localStorage.setItem("textAreaInput", JSON.stringify(textAreaInput));
    localStorage.getItem("textAreaInput")
    }
    //or localStorage.setItem("textAreaInput", textAreaInput);

    var storedEvents = JSON.parse(localStorage.getItem('textAreaInput'));

    
  //or????

  var textArea = //userinput
  //make object for each box with user input 
  //wiht something like this.. var printStorageBody = function () {
    //$("body").html(""); *****$("textarea").html('')
    //$("<pre>") **************$
    //.text(JSON.stringify(localStorage, null, '\t'))
    //.appendTo("body"); *******$ .appendTo('textarea')


  
   

    




//function that saves to local storage
//function to call storage
//eventlistener for ids of save buttons
    

//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.