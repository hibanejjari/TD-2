let score = 0;

// Reference to the game box and score display
const gameBox = document.getElementById("game-box");
const scoreDisplay = document.getElementById("score");

// Function to move the box to a random position
function moveBox() {
    const x = Math.floor(Math.random() * (window.innerWidth - 50));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    gameBox.style.left = `${x}px`;
    gameBox.style.top = `${y}px`;
}

// Add a click event listener to the game box
gameBox.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

// Move the box initially
moveBox();
