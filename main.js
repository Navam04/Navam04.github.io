// set the base starting value of 25 minutes

var start = "25:00";
document.getElementById("start").innerHTML = start;

var minutes = 25;
var seconds = 0;

//store if the timer has started 
var timerStarted = false;

//stores if the timer is paused or not as to not cause overlapping starting of the timer
var timerPaused = false;

function startTimer() {

    if (!timerPaused) {
        if (!timerStarted) {
            timerStarted = true;
            var timerInterval = setInterval(reduceSecond, 1000);
            timerInterval.start();
        }
    } else {
        timerStarted = true;
        timerPaused = false;
    }
}



function reduceSecond() {

    if (timerStarted) {

    if (seconds == 0 && minutes == 0) {
        clearInterval(timerInterval);
    }

    if (seconds == 0) {
        seconds = 59;
        minutes -= 1;
    } else {
        seconds -= 1;
    }

    }

    if (seconds <= 9) {
        start = minutes + ":0" + seconds;
    } else if (seconds <= 9 && minutes <= 9) {
        start = "0" + minutes + ":0" + seconds;
    } else {
        start = minutes + ":" + seconds;
    }

    document.getElementById("start").innerHTML = start;
}

function pauseTimer() {
    
    timerPaused = true;
    timerStarted = false;

}

function resetTimer() {
    pauseTimer();
    minutes = 25;
    seconds = 0;
    start = "25:00";
    document.getElementById("start") = start;

}
