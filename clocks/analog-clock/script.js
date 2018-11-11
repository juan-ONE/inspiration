const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*360)/(12*60);
let minPosition = (min*360/60)+(sec*360)/(60*60);
let secPosition = sec*360/60;

function runTheClock() {
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);


/* NOTES: 
// The rate of hour hand per hour: 360/12 = 30 
// the rate of hour hand per minute: 360/(12*60) = 0.5
// The rate of hour hand per second: 360/(12*60*60) = 
// The rate of minute hand per minute: 360/60 = 60
// The rate of minute hand per second: 360/(60*60) = 0.1
// The rate of second hand per second: 360/60 = 60

*/