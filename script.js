var num1 = 1;
var num2 = 1;
var num3 = 1;
var secInterval;
var msecInterval;
var minInterval;
function hidden() {
    let reset = document.getElementById('reset');
    let lap = document.getElementById('lap');
    reset.style.visibility = 'hidden';
    lap.style.visibility = 'hidden';
}

function pauseChronemeter() {
    clearInterval(minInterval);
    clearInterval(secInterval);
    clearInterval(msecInterval);
    document.getElementById('play').style.visibility = 'visible';
}

function startChronemeter() {
    minInterval = setInterval(startMin, 60000);
    secInterval = setInterval(startSec, 1000);
    msecInterval = setInterval(startMsec, 100);
    showButtons();
    if(num3 != 0 || num2 != 0 || num1 != 0) {
        document.getElementById('play').style.visibility = 'hidden';
    }
    else {
        document.getElementById('play').style.visibility = 'hidden';;
    }
}

function reset() {
    clearInterval(minInterval);
    clearInterval(secInterval);
    clearInterval(msecInterval);
    if(num3 != 0 || num2 != 0 || num1 != 0) {
        num1 = 0;
        num2 = 0;
        num3 = 0;
        minInterval = setInterval(startMin, 60000);
        secInterval = setInterval(startSec, 1000);
        msecInterval = setInterval(startMsec, 100);
        document.getElementById('play').style.visibility = 'hidden';
    }
    else {
        document.getElementById('play').style.visibility = 'visible';
    }
    
}

function showButtons() {
    document.getElementById('reset').style.visibility = 'visible'
    document.getElementById('lap').style.visibility = 'visible';
}

function startMin() {
    let min = document.getElementsByClassName('text min')[0];
    if(num3 < 10) {
        min.innerHTML = "0" + num3;
    }
    else {
        min.innerHTML = num3;
    }
    num3++;
}

function startSec() {
    let sec = document.getElementsByClassName('text sec')[0];
    if(num1 < 10) {
        sec.innerHTML = ":" + 0 + num1;
    }
    else {
        sec.innerHTML = ":" + num1;
    }
    num1++;
    if(num1 >= 60) {
        num1 = 0;
    }
}

function startMsec() {
    let msec = document.getElementsByClassName('text msec')[0];
    if(num2 < 10) {
        msec.innerHTML = ":" + 0 + num2;
    }
    else {
        msec.innerHTML = ":" + num2;
    }
    num2++;
    if(num2 > 10) {
        num2 = 0
    }
}

