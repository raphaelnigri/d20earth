//btn menu lateral
const btn = document.getElementById('btn-ham');
const menu = document.getElementById('menu');

btn.addEventListener('click', (event) => {
  btn.classList.toggle('open');
  menu.classList.toggle('menu-lateral--ativo');
});
