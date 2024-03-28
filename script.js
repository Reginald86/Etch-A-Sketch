

let black = document.querySelector("#black");
let color = document.querySelector("#color");
let numGrid = document.getElementById("gridValue");
let pad = document.getElementById("etch");
const GRID = document.querySelector("#gridInput");




numGrid.textContent = `${GRID.value} x ${GRID.value}`;
GRID.addEventListener("input", (event) => {
  numGrid.textContent = `${event.target.value} x ${event.target.value}`;
  clearPad();
  board(event.target.value);
});



function board (num) {
    for(let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        pad.appendChild(row);

    for(let j = 0; j < num; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
      }

    }
 }

 function clearPad() {
  pad.textContent = '';
}


board(GRID.value);



