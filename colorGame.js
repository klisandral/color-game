//----------------------------SELECTORS----------------------------------
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelector("#resetBtn");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
let squares = document.querySelectorAll(".square");

let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickRandomColor();

resetGame();


//----------------------------LISTENERS----------------------------------
resetBtn.addEventListener("click", resetGame);

easyBtn.addEventListener("click", function() {
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    resetGame();

    //change display of the 3 last squares
    for (let i=3; i<squares.length; i++) 
        squares[i].style.display = "none";
});

hardBtn.addEventListener("click", function() {
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    resetGame();

    //change display of the 3 last squares
    for (let i=3; i<squares.length; i++) 
        squares[i].style.display = "block";
});

for (let i=0; i<squares.length; i++) {

    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;

        //win condition
        if (clickedColor === pickedColor) {
            resetBtn.textContent = "Play Again?";
            messageDisplay.textContent = "Yay!!!";
            h1.style.backgroundColor = pickedColor;

            changeToSameColor(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Nope!"
        }
    })
}


//----------------------------FUNCTIONS----------------------------------
function resetGame() {
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";

    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    
    //change colors of squares
    for (let i = 0; i < squares.length; i++) 
        squares[i].style.backgroundColor = colors[i];
}

function pickRandomColor() {
    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    
    for (let i = 0; i < num; i++) 
        arr.push(randomColor());

    return arr;
}

function randomColor() {
    //pick a "red" from 0 -- 255
    let r = Math.floor(Math.random() * 255)
    //pick a "green" from 0 -- 255
    let g = Math.floor(Math.random() * 255)
    //pick a "blue" from 0 -- 255
    let b = Math.floor(Math.random() * 255)   

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeToSameColor (color) {
    for (let i = 0; i < squares.length; i++) 
        squares[i].style.backgroundColor = color;
}