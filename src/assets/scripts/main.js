window.addEventListener('scroll', () => {

  const cabecera = document.getElementById('cabecera');

  if (window.scrollY > 100) {
    cabecera.classList.add('sticky')
    return
  } else if (window.scrollY < 100 - 20) {
    cabecera.classList.remove('sticky')
    return
  }

})

document.querySelectorAll('[data-menu]').forEach(menu => {
  menu.addEventListener('click', () => menu.firstChild.click())
})