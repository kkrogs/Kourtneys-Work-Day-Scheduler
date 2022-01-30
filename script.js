

var comment = $(".iClass");
var saveBtn = $(".saving");


//Displays today's date
var today = moment();
$("#1a").text(today.format("dddd MMM Do, YYYY"));


//Render comment section to local storage. Comment section refers to the columns





$(".saving").on("click", function(event) {
  //prevents button from the default of only displaying for a split second
    event.preventDefault();
    //getting the value of the div so we can adjust them all at once to local storage
    var commentt = $(this).siblings(".iClass").val();
    var inptId = $(this).siblings(".iClass").attr("id");

    console.log(this);
    
 
    
    //stringifying the comment so we can render it to local storage
    localStorage.setItem(inptId, JSON.stringify(commentt));
//renders message to local storage
    renderMessage();

    console.log("saveBtn");
    

    
    });
    //Retrieving the commentt so that we can call the function above to display in local storage
    function renderMessage() {
      var lastComment = JSON.parse(localStorage.getItem("commentt"));

    };