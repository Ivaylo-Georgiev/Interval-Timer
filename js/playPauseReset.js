var state = {
  workSeconds: 0,
  restSeconds: 0,
  playMode: "off",
  pauseMode: "on",
  workMode: "off",
  restMode: "off",
  isTimerSet: false,
  isTimerRunning: false,
  timerID: 0,
  passedSeconds: 0,
};

function setWorkSeconds() {
  var currentWorkHours = parseInt($("#work-hours").text());
  var currentWorkMinutes = parseInt($("#work-minutes").text());
  var currentWorkSeconds = parseInt($("#work-seconds").text());

  return parseSeconds(currentWorkHours, currentWorkMinutes, currentWorkSeconds);
}

function setRestSeconds() {
  var currentWorkHours = parseInt($("#rest-hours").text());
  var currentWorkMinutes = parseInt($("#rest-minutes").text());
  var currentWorkSeconds = parseInt($("#rest-seconds").text());

  return parseSeconds(currentWorkHours, currentWorkMinutes, currentWorkSeconds);
}

function setTimer() {

  var workSeconds = setWorkSeconds();
  var restSeconds = setRestSeconds();

  if(workSeconds > 5 && restSeconds > 5) {
    state["workSeconds"] = workSeconds;
    state["restSeconds"] = restSeconds;
    state["isTimerSet"] = true;
    state["workMode"] = "on";
    state["restMode"] = "off";
  }
  else {
    toggleToastNotification();
  }

}

function workOrRest() {

  if(state["workMode"] === "on") {

    $("#rest-time-container").css("opacity", "0.25");
    $("#work-time-container").css("opacity", "1");

    if(state["passedSeconds"] === state["workSeconds"]) {
      state["workMode"] = "off";
      state["restMode"] = "on";
      state["passedSeconds"] = 0;
    }
  }

  if(state["restMode"] === "on") {

    $("#work-time-container").css("opacity", "0.25");
    $("#rest-time-container").css("opacity", "1");

    if(state["passedSeconds"] === state["restSeconds"]) {
      state["workMode"] = "on";
      state["restMode"] = "off";
      state["passedSeconds"] = 0;
    }
  }

}

function tick() {

  if(state["workMode"] === "on") {
    displayTime(state["passedSeconds"], workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
    displayTime(state["workSeconds"] - state["passedSeconds"], restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
  }
  else {
    displayTime(state["passedSeconds"], restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
    displayTime(state["restSeconds"] - state["passedSeconds"], workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
  }

  workOrRest();
  state["passedSeconds"] += 1;
}

function play() {

  state["playMode"] = "on";
  state["pauseMode"] = "off";
  state["isTimerRunning"] = true;
  state["timerID"] = setInterval(tick, 1000);

}

function pause() {

  state["pauseMode"] = "on";
  state["playMode"] = "off";
  state["isTimerRunning"] = true;
  clearInterval(state["timerID"]);

}

function onLoad() {
  $(".play-pause").attr("src", playImgChalk);
  $(".reset").attr("src", resetImgChalk);
  hideReset();
}

function hideArrows() {
  $(".arrow-up").hide();
  $(".arrow-down").hide();
}

function hideReset() {
  $("#reset-container").hide();
}

function showReset() {
  $("#reset-container").show();
}

function showArrows() {
  $(".arrow-up").show();
  $(".arrow-down").show();
}

function resetTime() {
  $(".time p").text("00");
}

function setImgSrc(htmlElement, imgSrc) {
  $(htmlElement).attr("src", imgSrc);
}

function playOrPause() {

  var src = $(".play-pause").attr("src");
  var background = $("body").css("background-color");

  if(background === chalkBlueRGB || background == mimosaRGB) {
    if(src === playImgGraphite) {
      setImgSrc(".play-pause", pauseImgGraphite);
      play();
    }

    if(src === pauseImgGraphite) {
      setImgSrc(".play-pause", playImgGraphite);
      pause();
    }
  }
  else {
    if(src === playImgChalk) {
      setImgSrc(".play-pause", pauseImgChalk);
      play();
    }

    if(src === pauseImgChalk) {
      setImgSrc(".play-pause", playImgChalk);
      pause();
    }
  }

}

function togglePlayPause() {

  if( $(".reset").is(":visible") === false) {
    setTimer();
  }

  if(state["isTimerSet"]) {
    hideArrows();
    showReset();
    playOrPause();
  }

}

function resetPlayPauseButton() {
  var src = $(".play-pause").attr("src");
  var background = $("body").css("background-color");
  if(background === chalkBlueRGB || background == mimosaRGB) {
    if(src === pauseImgGraphite) {
      setImgSrc(".play-pause", playImgGraphite);
    }
  }
  else {
    if(src === pauseImgChalk) {
      setImgSrc(".play-pause", playImgChalk);
    }
  }
}

function resetState() {
  state["isTimerSet"] = false;
  state["isTimerRunning"] = false;
  state["passedSeconds"] = 0;
  state["pauseMode"] = "on";
  state["playMode"] = "off";
  state["restMode"] = "off";
  state["workMode"] = "on";
  state["timerID"] = 0;
  state["workSeconds"] = 0;
  state["restSeconds"] = 0;
}

function reset() {

  showArrows();
  resetTime();
  hideReset();
  resetPlayPauseButton();
  pause();

  $("#rest-time-container").css("opacity", "1");
  $("#work-time-container").css("opacity", "1");

  resetState();

}

$(document).ready(onLoad);

$(".circle#play-pause-container").click(togglePlayPause);

$(".circle#reset-container").click(reset);
