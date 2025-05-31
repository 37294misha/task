const name = "Misha Nadeem";
const colors = [
  "#e74c3c", "#9b59b6", "#3498db", "#1abc9c",
  "#f1c40f", "#e67e22", "#2ecc71", "#ff6b6b",
  "#c0392b", "#16a085", "#8e44ad", "#2980b9"
];

const typewriter = document.getElementById("typewriter");

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(text) {
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    
    if (text[i] !== " ") {
      span.style.color = colors[i % colors.length];
    } else {
      span.style.marginRight = "0.5em"; // space gap
    }
    
    typewriter.appendChild(span);
    await delay(200); // 200ms delay between letters
  }
}

typeText(name);
