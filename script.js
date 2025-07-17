// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Ano automático no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const yearText = document.getElementById("year");
  yearText.textContent = new Date().getFullYear();
});

// Efeito de digitação
document.addEventListener("DOMContentLoaded", () => {
  const text = "Front-end developer passionate about crafting unique experiences.";
  const typingTarget = document.getElementById("typing-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      typingTarget.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
});

// Destacar o link ativo no menu
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // impede o envio padrão

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnnvevgj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "thank.html"; // redireciona após sucesso
    } else {
      alert("There was a problem submitting your form. Please try again.");
    }
  });
});
