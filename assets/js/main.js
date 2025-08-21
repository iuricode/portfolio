import { menu } from "./menu.js";

menu();

// Perguntas frequentes
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".toggle-btn");

  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((i) => {
      i.classList.remove("open");
      i.querySelector(".toggle-btn").innerHTML = `
        <img src="/assets/image/PlusCircle.svg" alt="Abrir" />
      `;
    });

    if (!isOpen) {
      item.classList.add("open");
      btn.innerHTML = `
        <img src="/assets/image/MinusCircle.svg" alt="Fechar" />
      `;
    }
  });
});
