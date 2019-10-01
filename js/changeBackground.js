function changeSeparatorColor(color) {
  $("#work-time-container").css("border-right-color", color);
  $("#rest-time-container").css("border-left-color", color);
  $(".circle").css("border-color", color);
  changePlayPauseResetImg();
}

function changePlayPauseResetImg() {
  var srcPlayPause = $(".play-pause").attr("src");
  var srcReset = $(".reset").attr("src");
  var background = $("body").css("background-color");

  if(background === chalkBlueRGB || background === mimosaRGB) {
    if(srcPlayPause === playImgChalk) {
      setImgSrc(".play-pause", playImgGraphite);
    }

    if(srcPlayPause === pauseImgChalk) {
      setImgSrc(".play-pause", pauseImgGraphite);
    }

    if(srcReset === resetImgChalk) {
      setImgSrc(".reset", resetImgGraphite);
    }
  }
  else {
    if(srcPlayPause === playImgGraphite) {
      setImgSrc(".play-pause", playImgChalk);
    }

    if(srcPlayPause === pauseImgGraphite) {
      setImgSrc(".play-pause", pauseImgChalk);
    }

    if(srcReset === resetImgGraphite) {
      setImgSrc(".reset", resetImgChalk);
    }
  }
}

function changeBackgroundColor(backgroundColor, fontColor) {
    changeBodyColor(backgroundColor, fontColor);
    changeTitleColor(backgroundColor, fontColor);
    changeArrowsColor(fontColor);
    $(".circle").css("background", backgroundColor);
}

function changeBodyColor(backgroundColor, fontColor){
  $("body").css("background", backgroundColor);
  $("body").css("color", fontColor);
}

function changeArrowsColor(color) {
  $(".arrow-down").css("border-top-color", color);
  $(".arrow-up").css("border-bottom-color", color);
}

function changeTitleColor(backgroundColor, fontColor) {
  $(".title").css("color", backgroundColor);
  $(".title").css("background", fontColor);
}

function changeBackground(backgroundColor, fontColor) {
  changeBackgroundColor(backgroundColor, fontColor);
  changeSeparatorColor(fontColor);
}

$("#chalk-blue").click(function() {
  changeBackground(chalkBlue, graphite);
});

$("#graphite").click(function() {
  changeBackground(graphite, chalkBlue);
});

$("#chili-pepper").click(function() {
  changeBackground(chiliPepper, chalkBlue);
});

$("#marsala").click(function() {
  changeBackground(marsala, chalkBlue);
});

$("#ultra-violet").click(function() {
  changeBackground(ultraViolet, chalkBlue);
});

$("#living-coral").click(function() {
  changeBackground(livingCoral, chalkBlue);
});

$("#mimosa").click(function() {
  changeBackground(mimosa, graphite);
});

$("#greenery").click(function() {
  changeBackground(greenery, chalkBlue);
});

$("#emerald").click(function() {
  changeBackground(emerald, chalkBlue);
});

$("#turquoise").click(function() {
  changeBackground(turquoise, chalkBlue);
});

$("#serenity").click(function() {
  changeBackground(serenity, chalkBlue);
});

$("#blue-iris").click(function() {
  changeBackground(blueIris, chalkBlue);
});
