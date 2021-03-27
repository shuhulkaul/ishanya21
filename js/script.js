window.onload = function () {
  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && window["safari"].pushNotification)
    );

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  if (isSafari || isIE) {
    document.getElementsByClassName("parent")[0].style.display = "none";
    document.getElementsByClassName("popup")[0].style.display = "block";
  }
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert(1);
    document.getElementsByClassName("parent")[0].style.display = "none";
    document.getElementsByClassName("pp")[0].innerHTML = "Please switch to your desktop browser."
    document.getElementsByClassName("popup")[0].style.display = "block";
  }
  else{
    var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
    if(isMobile){
      alert(21);
      document.getElementsByClassName("parent")[0].style.display = "none";
      document.getElementsByClassName("pp")[0].innerHTML = "Please switch to your desktop browser."
      document.getElementsByClassName("popup")[0].style.display = "block";
    }
  }
};




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
  $(".container").css("mask-position", newposX + "px " + newposY + "px");
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
  $(".mainText").fadeIn({ duration: 1000, queue: true });
  $(".mainText").animate({ zoom: "115%" }, 2600, "linear");
  $(".mainText").animate({ zoom: "99999%", opacity: 0 }, 1000);

  if ((verOffset = navigator.userAgent.indexOf("Firefox")) != -1) {
    document
      .getElementsByClassName("pmainText")[0]
      .setAttribute("style", "-moz-animation: zoom 5s;");
  }
  // $(".mainText").hide( { duration: 8000, queue: false })
  $(".mainText").fadeOut();
  // setTimeout(function(){}, 2000);
  $(".page2").fadeIn(5000);
}
