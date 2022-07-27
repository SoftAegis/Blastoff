
//Variable sets total time
var currTime = 10

function start(){
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    countdown()
    document.getElementById("countdown").innerHTML = currTime + " Seconds left";
    currTime = currTime - 1
}

 /*Countdown function makes use of a "if statement" loop until the condition is met,
    in this case the condition being currTime equalling zero, and waiting one second before removing one from currTime 
    I figured this would be slightly more efficient than simply copy/pasting the same line of code repeatedly, to instead have the program do it itself,
    while still not using for loops*/
function countdown() {
    
    if (currTime > 0) {
        setTimeout(start, 1000);
    } else {
         document.getElementById("blastoff").innerHTML = "Blastoff!";
    };

}