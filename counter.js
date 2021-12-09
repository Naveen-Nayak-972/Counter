
var i = 0;
document.getElementById("inc").innerText = i;
function increment() {
    i = i+1;
    document.getElementById('inc').innerText = i;
}
function decrement(){
    i = i-1;
    document.getElementById('inc').innerText = i;
}
function reset(){
    i=0;
    document.getElementById('inc').innerText = i;
}
