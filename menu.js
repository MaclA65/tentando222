const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

// Alterna o menu quando clica no botão
menuToggle.addEventListener("click", (event) => {
  event.stopPropagation(); // evita que o clique feche o menu imediatamente
  const isOpen = sideMenu.style.left === "0px";
  sideMenu.style.left = isOpen ? "-260px" : "0px";
});

// Fecha o menu quando clicar fora dele
document.addEventListener("click", (event) => {
  const isClickInside = sideMenu.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside) {
    sideMenu.style.left = "-260px";
  }
});
