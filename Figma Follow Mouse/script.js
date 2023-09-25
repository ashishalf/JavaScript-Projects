let figmaIcon = document.getElementById("figma-icon");

function move(e) {
    const x = e.clientX;
    const y = e.clientY;
    figmaIcon.style.left = x - 50 + "px"; // Adjust the position to center the image on the cursor
    figmaIcon.style.top = y - 50 + "px"; // Adjust the position to center the image on the cursor
}

document.addEventListener("mousemove", move);
