let count = document.getElementById("counter");

let lap = 5;

function incLap() {
  if (lap > 0) {
    lap -= 1;
    count.innerText = lap;
  }
  
  
}

function reset() {
  count.innerText = 5;
  lap = 5;
}
