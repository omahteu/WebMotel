"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

export function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

export function pause() {
  clearInterval(cron);
}

export function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

export function timer(quarto) {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  //document.getElementById('millisecond').innerText = returnData(millisecond);
}

export function returnData(input) {
  return input > 10 ? input : `0${input}`
}

export function start2() {
  pause2();
  cron = setInterval(() => { timer2(); }, 10);
}

export function pause2() {
  clearInterval(cron);
}

export function reset2() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour2').innerText = '00';
  document.getElementById('minute2').innerText = '00';
  document.getElementById('second2').innerText = '00';
  document.getElementById('millisecond2').innerText = '000';
}

export function timer2() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour2').innerText = returnData2(hour);
  document.getElementById('minute2').innerText = returnData2(minute);
  document.getElementById('second2').innerText = returnData2(second);
  //document.getElementById('millisecond').innerText = returnData(millisecond);
}

export function returnData2(input) {
  return input > 10 ? input : `0${input}`
}

export function start3() {
  pause3();
  cron = setInterval(() => { timer3(); }, 10);
}

export function pause3() {
  clearInterval(cron);
}

export function reset3() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour3').innerText = '00';
  document.getElementById('minute3').innerText = '00';
  document.getElementById('second3').innerText = '00';
  document.getElementById('millisecond3').innerText = '000';
}

export function timer3() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour3').innerText = returnData3(hour);
  document.getElementById('minute3').innerText = returnData3(minute);
  document.getElementById('second3').innerText = returnData3(second);
  //document.getElementById('millisecond').innerText = returnData(millisecond);
}

export function returnData3(input) {
  return input > 10 ? input : `0${input}`
}

export function start4() {
  pause4();
  cron = setInterval(() => { timer4(); }, 10);
}

export function pause4() {
  clearInterval(cron);
}

export function reset4() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour4').innerText = '00';
  document.getElementById('minute4').innerText = '00';
  document.getElementById('second4').innerText = '00';
  document.getElementById('millisecond4').innerText = '000';
}

export function timer4() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour4').innerText = returnData3(hour);
  document.getElementById('minute4').innerText = returnData3(minute);
  document.getElementById('second4').innerText = returnData3(second);
  //document.getElementById('millisecond').innerText = returnData(millisecond);
}

export function returnData4(input) {
  return input > 10 ? input : `0${input}`
}
