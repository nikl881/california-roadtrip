$(".show-inn").on("click", function() {
  // Remove the active class from all inns
  $(".inn-preview").removeClass("active");
  
  // Get the ID of the button that was clicked e.g deluxe 
  var buttonId = $(this).attr("id");
  
  // Give the Inn with a corressponding ID the active class. E.g #deluxeInn will get the active class
  $(`#${buttonId}Inn`).addClass("active");
});