// ## User Story

// ```md
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// top screen

// the current day is displayed at the top of the calendar
// current day is displayed at the top of the calender



// use boot strap to create time blocks

// Use CSS to manipulate colors

// 8 rows, 3 columns would be needed for this, use flexbox

//Vars at the top

var comment = $(".iClass")
var saveBtn = $(".saving");



var today = moment();
$("#1a").text(today.format("dddd MMM Do, YYYY"));


//Render comment section to local storage. Comment section refers to the columns





$(".saving").on("click", function(event) {
    event.preventDefault();
    var commentt = $(this).siblings(".iClass").val();
   
    var inptId = $(this).siblings(".iClass").attr("id");

    console.log(this);
    
    //we want the value of the div so that we can store it as tenAm for ex
    
    localStorage.setItem(inptId, JSON.stringify(commentt));
    renderMessage();

    console.log("saveBtn");
    
    });
    
    function renderMessage() {
      var lastComment = JSON.parse(localStorage.getItem("commentt"));
      
    };