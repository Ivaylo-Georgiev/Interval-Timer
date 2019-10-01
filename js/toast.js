function toggleToastNotification() {
  $("body").append("<div class=\"toast\">TIME SHOULD BE AT LEAST 5 SECONDS</div>");

  var iterations = 0;
  var blinkTimeout = setInterval(function() {
    iterations += 1;
    blink(iterations);
  }, 1000);

  setTimeout(function() {
    hideToast(blinkTimeout); 
  }, 5000);

}

function hideToast(blinkTimeout) {
  clearInterval(blinkTimeout);
   $(".toast").remove();
}

function blink(iterations) {
  if(iterations % 2 === 0) {
    $(".toast").show();
  }
  else {
    $(".toast").hide();
  }
}
