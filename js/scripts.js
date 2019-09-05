// peek-a-boo
$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeOut();
  });
  $(".clickable1").click(function() {
    $("#walrus-hidden").fadeIn();
    $("#walrus-showing").fadeOut();
  });
  // hide-and-seek
  $(".top-left").click(function() {
    $(".top-left").removeClass();
    $(".top-left").addClass("yellow-card")
    $(".top-center").fadeToggle();
  });
  $("button#lights-on").click(function() {
    $("body").removeClass();
    $("body").addClass("lights-on");
  });

  $("button#lights-off").click(function() {
    $("body").removeClass();
    $("body").addClass("lights-off");
  });
  // talk
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
