// index.js

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", updateColor);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor() {
    const colorBox = document.getElementById("colorBox");
    const colorText = document.getElementById("colorText");

    const randomColor = getRandomColor();

    colorBox.style.backgroundColor = randomColor; // Change the background color of the color box
    colorText.textContent = randomColor; // Update the displayed hex color
}
