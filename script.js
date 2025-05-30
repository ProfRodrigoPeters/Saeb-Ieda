// Função para rolar até a seção desejada
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop - 50, // Ajusta o deslocamento
    behavior: 'smooth'
  });
}

