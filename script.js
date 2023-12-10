let count = document.getElementById("counter");
let lap = 3;

//lap btn activates countdown
function decLap() {
  if (lap > 0) {
    lap -= 1;
    count.innerText = lap;
  } 
}

//activated default lap count
function reset() {
  count.innerText = 3;
  lap = 3;
}

//decreases total count
function minLaps() {
  if (lap > 1) {
    lap -= 1;
    count.innerText = lap;
  }
}
//increases total count
function addLaps() {
  lap += 1;
  count.innerText = lap;
}
