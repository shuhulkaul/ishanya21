$(document).on("click mousemove", ".parent", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x - 660;
  var newposY = y + 30;
  // $(".container").css(
  //   "transform",
  //   "translate3d(" + newposX + "px," + newposY + "px, 0px) "
  // );
  $(".container").css(
    "-webkit-mask-position",
    newposX + "px " + newposY + "px"
  );
  $(".container").css(
    "mask-position",
    newposX + "px " + newposY + "px"
  );
});

function myOverFunction(e) {
  document
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./img/Group 437(FILL).svg");
  document
    .getElementsByTagName("video")[0]
    .setAttribute("style", "-webkit-mask-image: ''; mask-image: '';");
}

function myLeaveFunction(e) {
  document
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./img/Group 437.svg");
  document
    .getElementsByTagName("video")[0]
    .setAttribute(
      "style",
      "-webkit-mask-image: url(https://kaul-bucket.s3.us-east-2.amazonaws.com/L.svg); mask-image: url(https://kaul-bucket.s3.us-east-2.amazonaws.com/L.svg);"
    );
}

function myClickFunction(e) {
  $(".parent").fadeOut(3000);
  $(".mainText").fadeIn({ duration: 1500, queue: true });
  $(".mainText").animate({ zoom: "115%" }, 3000, "linear");
  $(".mainText").animate({ zoom: "10000%", opacity: 0 }, 800);

  if ((verOffset = navigator.userAgent.indexOf("Firefox")) != -1) {
    document
      .getElementsByClassName("pmainText")[0]
      .setAttribute("style", "-moz-animation: zoom 6s;");
  }
  // $(".mainText").hide( { duration: 8000, queue: false })
  $(".mainText").fadeOut();
  // setTimeout(function(){}, 2000);
  $(".page2").fadeIn(5000);
}
