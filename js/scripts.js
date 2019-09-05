$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeOut();
  });
  $(".clickable1").click(function() {
    $("#walrus-hidden").fadeIn();
    $("#walrus-showing").fadeOut();
  });
});
