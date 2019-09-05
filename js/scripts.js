$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeOut();
  });
  $(".clickable1").click(function() {
    $("#walrus-hidden").fadeIn();
    $("#walrus-showing").fadeOut();
  });
    // this is blank space
    $(".top-left").click(function() {
      $(".top-left").removeClass();
      $(".top-left").addClass("yellow-card")
      $(".top-center").fadeToggle();
  });
      // this is blank space
      $("button#lights-on").click(function() {
        $("body").removeClass();
        $("body").addClass("lights-on");
      });

      $("button#lights-off").click(function() {
        $("body").removeClass();
        $("body").addClass("lights-off");
      });


});
