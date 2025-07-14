// Ano automático no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const yearText = document.getElementById("year");
  yearText.textContent = new Date().getFullYear();
});

// Efeito de digitação
const text = "Desenvolvedor front-end apaixonado por criar experiências únicas.";
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