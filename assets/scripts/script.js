"use strict"
window.addEventListener('scroll', onScroll);// adiciona o evento no body para evitar erro de referencia 
onScroll()//executa a função logo após ela for adicionada 



// Adiciona um listener para o evento de scroll na janela
window.addEventListener('scroll', onScroll)

// Função que é chamada quando há um evento de scroll na janela
function onScroll() {
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection('home')
  activateMenuAtCurrentSection('services')
  activateMenuAtCurrentSection('about')
 /* activateMenuAtCurrentSection('contact')*/
}

// Função que ativa o item de menu correspondente à seção atual
function activateMenuAtCurrentSection(sectionId){
  // Obtém a seção correspondente ao ID
  const section = document.getElementById(sectionId)
  
  // Obtém a posição da linha alvo (metade da altura da janela)
  const targetLine = window.scrollY + window.innerHeight / 2
  
  // Verifica se a seção atual passou da linha alvo
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionBottom = sectionTop + sectionHeight
  const sectionIsVisible = (sectionTop <= targetLine) && (sectionBottom > targetLine)
  
  // Atualiza a classe do item de menu correspondente
  const menuLink = document.querySelector(`.menu a[href="#${sectionId}"]`)
  if (sectionIsVisible) {
    menuLink.classList.add('active')
  } else {
    menuLink.classList.remove('active')
  }
}

// Função que mostra o botão de voltar ao topo quando o usuário rola para baixo
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


function openMenu () {
  document.body.classList.add("menu-expanded");
}

function closeMenu () {
  document.body.classList.remove("menu-expanded");
}
/*lib */
  ScrollReveal().reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`, {
    delay: 100,
    duration: 800,
    distance: '50px',
    easing: 'ease-in-out',
    interval: 150,
    origin: 'bottom',
    reset: false
});
