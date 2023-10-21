let count = document.getElementById("counter");
let lap = 3;

function incLap() {
  if (lap > 0) {
    lap -= 1;
    count.innerText = lap;
  }
}

function reset() {
  count.innerText = 3;
  lap = 3;
}

function minLaps() {
  if (lap > 1) {
    lap -= 1;
    count.innerText = lap;
  }
}

function addLaps() {
  lap += 1;
  count.innerText = lap;
}
