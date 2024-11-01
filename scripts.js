let userInput = 16;
let parsedInput = 16;

const button = document.createElement("button");
button.textContent = "Grid size";
document.body.appendChild(button);
const container = document.createElement("div");
container.classList.add("container")
document.body.appendChild(container);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  container.innerHTML = '';

  const squareSize = 800 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = 1;
    container.appendChild(square);

    let hoverCount = 0;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = getRandomColor();
      hoverCount += 1;
      square.style.opacity = Math.max(0, (1- hoverCount * 0.1));
    });
  }
}

createGrid(parsedInput);

button.addEventListener("click", () => {
  userInput = prompt("How many squares would you like?");
  parsedInput = parseInt(userInput, 10);

  if(!isNaN(parsedInput) && parsedInput > 0 && parsedInput <= 100) {
    createGrid(parsedInput);
  } else {
    alert("Please enter a valid positive integer (1-100).");
  }
});