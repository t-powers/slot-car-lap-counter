let count = document.getElementById("counter");
let lap = 0;

function incLap() {
  lap += 1;
  count.innerText = lap;
}
function save()