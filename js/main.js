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

$('#break-increase').click(breakInc);

function breakInc() {
  if (breakTime < 15) {
    breakTime++;
    totalBreakSeconds += 60;
    $('#break-length').html(breakTime);
  }
}
