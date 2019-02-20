
$(".show-inn").on("click", function() {

  $(".inn-preview").removeClass("active");
  

  var buttonId = $(this).attr("id");
  

  $(`#${buttonId}Inn`).addClass("active");
  
  
});