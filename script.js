window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Automatic year in the footer
document.addEventListener("DOMContentLoaded", () => {
  const yearText = document.getElementById("year");
  yearText.textContent = new Date().getFullYear();
});

// Typing effect
const text = "Front-end developer passionate about crafting unique experiences.";
const typingTarget = document.getElementById("typing-text");
let i = 0;

function type() {
  if (i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}

type();