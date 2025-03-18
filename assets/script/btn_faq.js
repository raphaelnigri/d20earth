const btn_rpg = document.getElementById('btn-rpg');
const btn_gratis = document.getElementById('btn-gratis');
const btn_online = document.getElementById('btn-online');
const w_rpg = document.getElementById('wraper_rpg');
const w_gratis = document.getElementById('wraper_gratis');
const w_online = document.getElementById('wraper_online');

btn_rpg.addEventListener('click', (event) => {
  btn_rpg.classList.add('pressionado');
  btn_gratis.classList.remove('pressionado');
  btn_online.classList.remove('pressionado');

  w_rpg.classList.remove('off');
  w_gratis.classList.add('off');
  w_online.classList.add('off');
});

btn_gratis.addEventListener('click', (event) => {
  btn_rpg.classList.remove('pressionado');
  btn_gratis.classList.add('pressionado');
  btn_online.classList.remove('pressionado');

  w_rpg.classList.add('off');
  w_gratis.classList.remove('off');
  w_online.classList.add('off');
});

btn_online.addEventListener('click', (event) => {
  btn_rpg.classList.remove('pressionado');
  btn_gratis.classList.remove('pressionado');
  btn_online.classList.add('pressionado');

  w_rpg.classList.add('off');
  w_gratis.classList.add('off');
  w_online.classList.remove('off');
});