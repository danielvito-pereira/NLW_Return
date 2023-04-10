"use strict"

/**
 * Mostra ou oculta um botão de voltar ao topo com base na posição atual de rolagem da página.
 */
function showBackToTopButtonOnScroll() {
  // Seleciona o botão de voltar ao topo
  const backToTopButton = document.querySelector("#backToTopButton");

  // Verifica se o botão existe antes de prosseguir
  if (!backToTopButton) {
    return;
  }

  // Adiciona ou remove a classe "show" do botão com base na posição de rolagem
  scrollY > 300 ? backToTopButton.classList.add("show") : backToTopButton.classList.remove("show");

}

showBackToTopButtonOnScroll()
