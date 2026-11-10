
const container = document.getElementById("container");

const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080"
];

// Create 800 boxes
for (let i = 0; i < 800; i++) {

    const square = document.createElement("div");

    square.classList.add("square");

    // Change color on hover
    square.addEventListener("mouseover", function() {

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        square.style.backgroundColor = randomColor;

    });

    // Remove color after 1 second
    square.addEventListener("mouseout", function() {

        setTimeout(function() {
            square.style.backgroundColor = "#1d1d1d";
        }, 1000);

    });

    container.appendChild(square);
}
