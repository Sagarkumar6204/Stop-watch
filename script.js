let [seconds, minute, hours] = [0, 0, 0];
let displaytime = document.getElementById("display-time");
let timer = null;
function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hours++;
        }

    }

    let h =hours<10?"0"+hours:hours;
    let m=minute<10?"0"+minute:minute;
    let s =seconds<10?"0"+seconds:seconds;
    displaytime.innerHTML = h + ":" + m + ":" + s;
}

function watchstart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}
function watchstop(){
    clearInterval(timer);

}
function watchreset(){
    clearInterval(timer);
    [seconds, minute, hours] = [0, 0, 0];
    displaytime.innerHTML="00:00:00";
    
}