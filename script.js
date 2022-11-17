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
  })
   //-------------------------------------------------------------
    
   
   var saveBtn = document.querySelectorAll('.saveBtn');
   console.log(saveBtn)

    saveBtn[0].addEventListener("click", function() {

      console.log($('#hour-9 .description').val())
    localStorage.setItem('hour-9', $('#hour-9 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr9 = localStorage.getItem('hour-9');
      
      $('#hour-9 .description').val(recallHr9) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr9)

    })

    saveBtn[1].addEventListener("click", function() {

      console.log($('#hour-10 .description').val())
    localStorage.setItem('hour-10', $('#hour-10 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr10 = localStorage.getItem('hour-10');
      
      $('#hour-10 .description').val(recallHr10) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr10)

    })

    saveBtn[2].addEventListener("click", function() {

      console.log($('#hour-11 .description').val())
    localStorage.setItem('hour-11', $('#hour-11 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr11 = localStorage.getItem('hour-11');
      
      $('#hour-11 .description').val(recallHr11) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr11)

    })

    saveBtn[3].addEventListener("click", function() {

      console.log($('#hour-12 .description').val())
    localStorage.setItem('hour-12', $('#hour-12 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr12 = localStorage.getItem('hour-12');
      
      $('#hour-12 .description').val(recallHr12) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr12)

    })

    saveBtn[4].addEventListener("click", function() {

      console.log($('#hour-1 .description').val())
    localStorage.setItem('hour-1', $('#hour-1 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr1 = localStorage.getItem('hour-1');
      
      $('#hour-1 .description').val(recallHr1) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr1)

    })

    saveBtn[5].addEventListener("click", function() {

      console.log($('#hour-2 .description').val())
    localStorage.setItem('hour-2', $('#hour-2 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr2 = localStorage.getItem('hour-2');
      
      $('#hour-2 .description').val(recallHr2) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr2)

    })

    saveBtn[6].addEventListener("click", function() {

      console.log($('#hour-3 .description').val())
    localStorage.setItem('hour-3', $('#hour-3 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr3 = localStorage.getItem('hour-3');
      
      $('#hour-3 .description').val(recallHr3) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr3)

    })

    saveBtn[7].addEventListener("click", function() {

      console.log($('#hour-4 .description').val())
    localStorage.setItem('hour-4', $('#hour-4 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr4 = localStorage.getItem('hour-4');
      
      $('#hour-4 .description').val(recallHr4) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr4)

    })

    saveBtn[8].addEventListener("click", function() {

      console.log($('#hour-5 .description').val())
    localStorage.setItem('hour-5', $('#hour-5 .description').val());
    
    })

    $(function() { //runs everytime page is refreshed and everything appears on the page

      var recallHr9 = localStorage.getItem('hour-5');
      
      $('#hour-5 .description').val(recallHr9) ///val() w/e in () changes text in a text area only
      
      console.log(recallHr9)

    })

    /*
    ==============
   curr_dictionary = {0: 'hour-9', 1: 'hour-10', ...}
for () {
      // You would use the dictionary above
      localStorage.setItem(..., ...);
}
================
   
    //$('#TA').append('<li>' + $('#hour-9').val());

    $('#hour-10'.description).val(localStorage.setItem('hour-10'));
    $('#hour-10'.description).val(localStorage.getItem('hour-10'));

    $('#hour-11'.description).val(localStorage.setItem('hour-11'));
    $('#hour-11'.description).val(localStorage.getItem('hour-11'));

    $('#hour-12'.description).val(localStorage.setItem('hour-12'));
    $('#hour-12'.description).val(localStorage.getItem('hour-12'));

    $('#hour-1'.description).val(localStorage.setItem('hour-1'));
    $('#hour-1'.description).val(localStorage.getItem('hour-1'));

    $('#hour-2'.description).val(localStorage.setItem('hour-2'));
    $('#hour-2'.description).val(localStorage.getItem('hour-2'));

    $('#hour-3'.description).val(localStorage.setItem('hour-3'));
    $('#hour-3'.description).val(localStorage.getItem('hour-3'));

    $('#hour-4'.description).val(localStorage.setItem('hour-4'));
    $('#hour-4'.description).val(localStorage.getItem('hour-4'));

    $('#hour-5'.description).val(localStorage.setItem('hour-5'));
    $('#hour-5'.description).val(localStorage.getItem('hour-5'));
    
      })
    //load any saved data from local storage using jquery
    //do with all hour-
   

    //function (userInputElement) {

      //var $newLiHour9 = $("<li id='TA9'></li>").text('#hour-9'.description).val();   // Create with jQuery
      //$('textarea'.)

     // var $newdiv1 = $( "<div id='object1'></div>" ),
  //newdiv2 = document.createElement( "div" ),
 // existingdiv1 = document.getElementById( "foo" );
 
//$( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );
      //var hour9 = document.createElement('<li>');
      //hour9.textContent = 


  

  // Adds text content to created tag
 
    //appending saved input to hmtl


  //  todoList.appendChild(li);


    //or localStorage.setItem("textAreaInput", textAreaInput);

    

    
  //or????

    //userinput
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
  // TODO: Add code to display the current date in the header of the page

  */