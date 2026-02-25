const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

const containerSize = 600;

function createGrid(gridSize){
    container.innerHTML = "";

    const squareSize = containerSize / gridSize


for (let i = 0;  i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });



    container.appendChild(square);
 }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
    let userInput = prompt("Enter number of squares per side (max 100):  ");

    userInput = Number(userInput);

    if (userInput > 0 && userInput < 100) {
        createGrid(userInput);
    }  else {
        alert("Please enter a number between 1 and 100.");   
    }
    
});