"use strict"
toggleClassOnScroll("navigation", "scroll");

function toggleClassOnScroll(elementId, className) {
  // Busca o elemento com o id fornecido e armazena em uma variável.
  const element = document.getElementById(elementId);

  // Adiciona um listener ao objeto 'window' que escuta pelo evento 'scroll'.
  window.addEventListener("scroll", function() {
    // Obtem a posição atual do scroll.
    const scrollPosition = window.scrollY;

    // Verifica se a posição do scroll é maior do que zero.
    if (scrollPosition > 0) {
      // Se for, adiciona a classe fornecida ao elemento HTML.
      element.classList.add(className);
    } else {
      // Caso contrário, remove a classe do elemento HTML.
      element.classList.remove(className);
    }
  });
}


