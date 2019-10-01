const offset = 2;
const filler = '0';

const oneHour = 3600;
const oneMinute = 60;
const oneSecond = 1;

const workHoursHtmlElementId = "#work-hours";
const workMinutesHtmlElementId = "#work-minutes";
const workSecondsHtmlId = "#work-seconds";

const restHoursHtmlElementId = "#rest-hours";
const restMinutesHtmlElementId = "#rest-minutes";
const restSecondsHtmlId = "#rest-seconds";

function parseSeconds(hours, minutes, seconds) {
  return hours*oneHour + minutes*oneMinute + seconds;
}

function displayUnit(htmlElement, value) {
  $(htmlElement).text(value.toString().padStart(offset, filler));
}

function displayTime(seconds, secondsHtmlElement, minutesHtmlElement, hoursHtmlElement) {
  var displayHours = Math.floor(seconds / oneHour);
  var displayMinutes = Math.floor(seconds / oneMinute % oneMinute);
  var displaySeconds = seconds % oneMinute;

  displayUnit(hoursHtmlElement, displayHours);
  displayUnit(minutesHtmlElement, displayMinutes);
  displayUnit(secondsHtmlElement, displaySeconds);
}

function incrementSeconds(seconds, secondsHtmlElement, minutesHtmlElement, hoursHtmlElement) {
  var currentHours = parseInt($(hoursHtmlElement).text());
  var currentMinutes = parseInt($(minutesHtmlElement).text());
  var currentSeconds = parseInt($(secondsHtmlElement).text());

  var incrementSeconds = parseSeconds(currentHours, currentMinutes, currentSeconds) + seconds;

  displayTime(incrementSeconds, secondsHtmlElement, minutesHtmlElement, hoursHtmlElement);
}

function decrementSeconds(seconds, secondsHtmlElement, minutesHtmlElement, hoursHtmlElement) {
  var currentHours = parseInt($(hoursHtmlElement).text());
  var currentMinutes = parseInt($(minutesHtmlElement).text());
  var currentSeconds = parseInt($(secondsHtmlElement).text());

  var decrementedSeconds = parseSeconds(currentHours, currentMinutes, currentSeconds) - seconds;

  if(decrementedSeconds >= 0) {
    displayTime(decrementedSeconds, secondsHtmlElement, minutesHtmlElement, hoursHtmlElement);
  }
}

// HOURS

$("#increment-work-hours").click( function() {
  incrementSeconds(oneHour, workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
});
$("#decrement-work-hours").click( function() {
  decrementSeconds(oneHour, workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
});

$("#increment-rest-hours").click( function() {
  incrementSeconds(oneHour, restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
});
$("#decrement-rest-hours").click( function() {
  decrementSeconds(oneHour, restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
});

//MINUTES

$("#increment-work-minutes").click( function() {
  incrementSeconds(oneMinute, workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
});
$("#decrement-work-minutes").click( function() {
  decrementSeconds(oneMinute, workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
});

$("#increment-rest-minutes").click( function() {
  incrementSeconds(oneMinute, restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
});
$("#decrement-rest-minutes").click( function() {
  decrementSeconds(oneMinute, restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
});

// SECONDS

$("#increment-work-seconds").click( function() {
  incrementSeconds(oneSecond, workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
});
$("#decrement-work-seconds").click( function() {
  decrementSeconds(oneSecond, workSecondsHtmlId, workMinutesHtmlElementId, workHoursHtmlElementId);
});

$("#increment-rest-seconds").click( function() {
  incrementSeconds(oneSecond, restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
});
$("#decrement-rest-seconds").click( function() {
  decrementSeconds(oneSecond, restSecondsHtmlId, restMinutesHtmlElementId, restHoursHtmlElementId);
});
