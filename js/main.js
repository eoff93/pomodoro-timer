// initial values
let breakTime = 5;
let time = 25;
let countdown = time;

// calculate total seconds and break seconds
let totalSeconds = countdown * 60;
let totalBreakSeconds = breakTime * 60;

// set initial
$('#study-length').html(time);
$('#break-length').html(breakTime);
$('#timer').html(`${time}:00`);

// controls to change break time
$('#break-increase').click(breakInc);
$('#break-decrease').click(breakDec);

// controls to change study length
$('#study-increase').click(studyInc);
$('#study-decrease').click(studyDec);

// controls to start, pause and reset
$('#start').click(() => {
  const $value = $('#start');
  if ($value.html() === 'Start') {
    $value.html('Pause');
    startTimer();
  } else {
    $value.html('Start');
    pauseTimer();
  }
});

$('#reset').click(resetTimer);

// increases break time and totalBreakSeconds
function breakInc() {
  if (breakTime < 15) {
    breakTime++;
    totalBreakSeconds += 60;
    $('#break-length').html(breakTime);
  }
}

// decreases break time and totalBreakSeconds
function breakDec() {
  if (breakTime > 1) {
    breakTime--;
    totalBreakSeconds -= 60;
    $('#break-length').html(breakTime);
  }
}
// increase study length and totalSeconds
function studyInc() {
  if (time < 50) {
    time++;
    countdown = time;
    totalSeconds += 60;
    $('#study-length').html(time);
  }
}

// decrease study length and totalSeconds
function studyDec() {
  if (time > 15) {
    time--;
    totalSeconds -= 60;
    $('#study-length').html(time);
  }
}

// timer variables
let timer;
let timerBreak;
let setBreak = false;

function startTimer() {
  const minutes = parseInt(totalSeconds / 60, 10);
  let seconds = parseInt(totalSeconds % 60, 10);

  if (totalSeconds > 0) {
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    $('#timer').html(`${minutes}:${seconds}`);
    totalSeconds -= 1;
    timer = setTimeout(startTimer, 1000);
  }

  if (totalSeconds === 0) {
    if (setBreak === false) {
      $('#timer').html('<h3>Time for a break!</h3>');
    }
    clearTimeout(timer);
    timerBreak = setTimeout(startBreak, 1000);
  }
}

// break time function
let breakTimer;

function startBreak() {
  setBreak = true;

  const breakMinutes = parseInt(totalBreakSeconds / 60, 10);
  let breakSeconds = parseInt(totalBreakSeconds % 60, 10);

  if (totalBreakSeconds > 0) {
    if (breakSeconds < 10) {
      breakSeconds = `0${breakSeconds}`;
    }

    $('#timer').html(`${breakMinutes}:${breakSeconds}`);
    totalBreakSeconds -= 1;
    breakTimer = setTimeout(startBreak, 1000);
  }
}

// time pausing function
function pauseTimer() {
  clearTimeout(timer);
  clearTimeout(timerBreak);
  clearTimeout(breakTimer);
}

// reset time function
function resetTimer() {
  pauseTimer();
  setBreak = false;
  breakTime = 5;
  time = 25;
  countdown = time;

  totalBreakSeconds = breakTime * 60;
  totalSeconds = countdown * 60;

  $('#break-length').html(breakTime);
  $('#study-length').html(time);
  $('#timer').html(`${countdown}:00`);
}
