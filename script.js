const container = document.getElementById("container");

const gridSize = 16;
const squareSize = 600 / gridSize;

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

