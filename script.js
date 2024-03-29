
const blackBtn = document.querySelector("#black");
const colorBtn = document.querySelector("#color");
let numGrid = document.getElementById("gridValue");
let pad = document.getElementById("etch");
const GRID = document.querySelector("#gridInput");
let useRandomColor = false;
let useBlack = false;



numGrid.textContent = `${GRID.value} x ${GRID.value}`;
GRID.addEventListener("input", (event) => {
  numGrid.textContent = `${event.target.value} x ${event.target.value}`;
  clearPad();
  board(event.target.value);
});



function board(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    pad.appendChild(row);

    for (let j = 0; j < num; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
      column.addEventListener('mouseover', (event) => {
        if (useRandomColor) {
          randomColor(event);
          
        }
        if (useBlack) {
          blackColor(event);
        }
      });
    }
  }
}

 function clearPad() {
  pad.textContent = '';
}

function random(number){
  return Math.floor(Math.random() * (number + 1));
}

function randomColor(event){
  const rainbow = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  event.target.style.background = rainbow;
}


function blackColor(event){
  event.target.style.background = "black";
}


colorBtn.addEventListener('click', () => {
  useRandomColor = !useRandomColor; 
  useBlack = false;
});


blackBtn.addEventListener('click', () => {
  useBlack = !useBlack; 
  useRandomColor = false;
});


board(GRID.value);






