
// on page load
$(function() {
  console.log(`hello world`);
  $(".devour-btn").click(function(event) {
    console.log($(this).attr(`data-burgerId`));
  });
});