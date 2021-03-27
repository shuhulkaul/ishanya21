$(document).on("click mousemove", ".parent", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x - 660;
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

function myOverFunction(e) {
  document
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./img/Group 437(FILL).svg");
  document
    .getElementsByTagName("video")[0]
    .setAttribute("style", "-webkit-mask-image: ''");
}

function myLeaveFunction(e) {
  document
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./img/Group 437.svg");
  document
    .getElementsByTagName("video")[0]
    .setAttribute(
      "style",
      "-webkit-mask-image: url(https://kaul-bucket.s3.us-east-2.amazonaws.com/L.svg);"
    );
}

function myClickFunction(e) {
  $(".parent").fadeOut(6000);
  $(".mainText").fadeIn({duration: 2000, queue: true});
  $(".mainText").animate({zoom: "130%" }, 3000, "linear");
  $(".mainText").animate({ zoom: "20000%", opacity: 0 }, 1200, "linear");
  // $(".mainText").hide( { duration: 8000, queue: false })
  $(".mainText").fadeOut();
  $(".page2").fadeIn(4000);
}
