let count = document.getElementById("counter");

let lap = 0;
console.log(lapReset);

function incLap() {
  lap += 1;
  count.innerText = lap;
}

function reset() {
  count.innerText = 0;
  lap = 0;
}
