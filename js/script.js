$(document).on("click mousemove", "body", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 2000;
    var newposY = y - 2000;
    $(".container").css(
      "transform",
      "translate3d(" + newposX + "px," + newposY + "px,0px)"
    );
  });