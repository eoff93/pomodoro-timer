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
$('#timer').html(time + ':00');

// controls to change break time
$('#break-increase').click(breakInc);
$('#break-decrease').click(breakDec);

// controls to change study length
$('#study-increase').click(studyInc);
$('#study-decrease').click(studyDec);

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
