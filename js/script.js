$(document).on("click mousemove", "body", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x-750;
  var newposY = y;
  // $(".container").css(
  //   "transform",
  //   "translate3d(" + newposX + "px," + newposY + "px, 0px) "
  // );
  $(".container").css(
    "-webkit-mask-position",
    newposX + "px " + newposY + "px" 
  );
});
// - 920
// - 580