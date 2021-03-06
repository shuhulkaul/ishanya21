function dpiValH() {
  if (window.devicePixelRatio == 1.25) {
    return (660 + ($(window).height() - 722)) / 1.3;
  } else {
    return 660 + ($(window).height() - 937);
  }
}

//Checking for browser compatibility
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

  //Checking for mobile browsers
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    document.getElementsByClassName("parent")[0].style.display = "none";
    document.getElementsByClassName("pp")[0].innerHTML =
      "Please switch to your desktop browser.";
    document.getElementsByClassName("popup")[0].style.display = "block";
  } else {
    var isMobile =
      Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1;
    if (window.devicePixelRatio > 1.25) {
      document.getElementsByClassName("parent")[0].style.display = "none";
      document.getElementsByClassName("pp")[0].innerHTML =
        "Your system DPR is greater than 1.25. Please change the DPI settings to 1.25 or less.";
      document.getElementsByClassName("popup")[0].style.display = "block";
    } else if (isMobile) {
      document.getElementsByClassName("parent")[0].style.display = "none";
      document.getElementsByClassName("pp")[0].innerHTML =
        "Please switch to your desktop browser.";
      document.getElementsByClassName("popup")[0].style.display = "block";
    } else {
      if (window.devicePixelRatio > 1.25) {
        document.getElementsByClassName("parent")[0].style.display = "none";
        document.getElementsByClassName("pp")[0].innerHTML =
          "Your system DPR is greater than 1.25. Please change the DPI settings to 1.25 or less.";
        document.getElementsByClassName("popup")[0].style.display = "block";
      }
    }
  }
};

//Moving mask with the cursor location
$(document).on("click mousemove", ".parent", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x - dpiValH();
  var newposY = y + 30;
  $(".container").css(
    "-webkit-mask-position",
    newposX + "px " + newposY + "px"
  );
  $(".container").css("mask-position", newposX + "px " + newposY + "px");
});

//Function for mouse over the button
function myOverFunction(e) {
  document
    .getElementById("ibtn")
    .setAttribute("src", "");
  document
    .getElementById("container")
    .setAttribute("style", "-webkit-mask-image: ''; mask-image: '';");
}

//Function when mouse leaves the button
function myLeaveFunction(e) {
  document.getElementById("ibtn").setAttribute("src", "./img/Group 437.svg");
  document
    .getElementById("container")
    .setAttribute(
      "style",
      "-webkit-mask-image: url(https://kaul-bucket.s3.us-east-2.amazonaws.com/L.svg); mask-image: url(https://kaul-bucket.s3.us-east-2.amazonaws.com/L.svg);"
    );
}

//Function when mouse clicks on the button
async function myClickFunction(e) {
  $(".container").attr("autoplay", "");
  $("#ibtn").attr("onmouseleave", "");
  $("#ibtn").attr("onmouseover", "");
  $("#container").attr("style", "");
  $(".btn").fadeOut(300);
  await sleep(13000);
  $(".parent").fadeOut(1000);
  $(".mainText").fadeIn({ duration: 1000, queue: true });
  // $(".mainText").animate({ zoom: "115%" }, 2600, "linear");
  // $(".mainText").animate({ zoom: "99999%", opacity: 0 }, 1000);
  document
    .getElementsByClassName("pmainText")[0]
    .setAttribute("style", "animation: zoom 7s;");
  await sleep(4000);
  //Firefox animation only
  if ((verOffset = navigator.userAgent.indexOf("Firefox")) != -1) {
    document
      .getElementsByClassName("pmainText")[0]
      .setAttribute("style", "-moz-animation: zoom 5s;");
  }
  $(".mainText").fadeOut();
  $(".page2").fadeIn(5000);
  await sleep(4000);
  document.getElementsByClassName("scrollAnimationContainer")[0].style.display =
    "block";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
