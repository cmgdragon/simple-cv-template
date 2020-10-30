const cabecera = document.getElementById('cabecera');
const cabeceraOffset = cabecera.offsetTop;

moverCabeceraConScroll = () => {
  if (window.pageYOffset > cabeceraOffset) {
    cabecera.classList.add("fixed");
  } else {
    cabecera.classList.remove("fixed");
  }
};

document.querySelectorAll('[data-menu]').forEach(menu => {
  menu.addEventListener('click', () => menu.firstChild.click())
})

window.addEventListener('scroll', moverCabeceraConScroll);