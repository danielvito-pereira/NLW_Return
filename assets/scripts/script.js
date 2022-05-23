window.addEventListener('scroll', onScroll);// adiciona o evento no body para evitar erro de referencia 
onScroll()//executa a função logo após ela for adicionada 




function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
  //linha alvo
 const targetLine= scrollY + innerHeight / 2;
 

 // Verificar se a seção passou da linha 
 // quais dados vou precisar ?
 
 //topo da seção
 const sectionTop = section.offsetTop

 //a altura da seção
 const sectionHeight = section.offsetHeight;


// Verificar se se o topo da seção chegou ou ultrapassou a linha alvo 
const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


// verifica se a base está abaixo da linha alvo
// quais dados vou precisar?

// a seção termina onde 
const sectionEndsAt = sectionTop + sectionHeight

// o final da seção passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

// limites da seção 
const sectionBoundaries =sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
const sectionId = section.getAttribute('id')/*vai pegar o atributo da seção por exemplo a home  */
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)





menuElement.classList.remove('active')
if (sectionBoundaries) {
  menuElement.classList.add('active')
}

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu () {
  document.body.classList.add("menu-expanded");
}

function closeMenu () {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);