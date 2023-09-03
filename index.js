var rl = require("readline-sync");

let temseconds = Number(rl.question(""));
let temminutes = Number(rl.question(""));

let seconds = 0;
let minutes = 0;

const timer = setInterval(() => {
  if (seconds === temseconds && minutes === temminutes) {
    clearInterval(timer);
    console.log("конец");
  } else {
    seconds += 1;
    console.log(
        `${String(minutes).length == 1 ? `0${minutes}` : minutes}:${
        String(seconds).length == 1 ? `0${seconds}` : seconds
        }`
    );
    if (seconds > 59) {
        seconds = 0;
        minutes += 1;
    }    
  }
}, 1000);
