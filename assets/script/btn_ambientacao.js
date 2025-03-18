const btn_amb_1 = document.getElementById('btn-amb1');
const btn_amb_2 = document.getElementById('btn-amb2');
const btn_amb_3 = document.getElementById('btn-amb3');
const w_guerra = document.getElementById('wraper_guerra');
const w_inc = document.getElementById('wraper_inc');
const w_irmandade = document.getElementById('wraper_irmandade');

btn_amb_1.addEventListener('click', (event) => {
  btn_amb_1.classList.add('pressionado');
  btn_amb_2.classList.remove('pressionado');
  btn_amb_3.classList.remove('pressionado');

  w_guerra.classList.remove('off');
  w_inc.classList.add('off');
  w_irmandade.classList.add('off');
});

btn_amb_2.addEventListener('click', (event) => {
  btn_amb_1.classList.remove('pressionado');
  btn_amb_2.classList.add('pressionado');
  btn_amb_3.classList.remove('pressionado');

  w_guerra.classList.add('off');
  w_inc.classList.remove('off');
  w_irmandade.classList.add('off');
});

btn_amb_3.addEventListener('click', (event) => {
  btn_amb_1.classList.remove('pressionado');
  btn_amb_2.classList.remove('pressionado');
  btn_amb_3.classList.add('pressionado');

  w_guerra.classList.add('off');
  w_inc.classList.add('off');
  w_irmandade.classList.remove('off');
});
