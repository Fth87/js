const tombol = document.getElementById('tombol');

tombol.addEventListener('click', function () {
  //   document.body.style.backgroundColor = 'lightblue';
  document.body.classList.toggle('warnaBiru');
});

const acakWarna = document.createElement('button');
const InnerAcakWarna = document.createTextNode('acak warna bg');
acakWarna.appendChild(InnerAcakWarna);
acakWarna.setAttribute('type', 'button');
tombol.after(acakWarna);

acakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const sMerah = document.querySelector('input[name = sMerah]');
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
const sHijau = document.querySelector('input[name = sHijau]');
sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
const sBiru = document.querySelector('input[name = sBiru]');
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document.body.addEventListener('mousemove', function (event) {
  // posisi mouse
  //console.log(event.clientX)
  //ukuran browser;
  // console.log(window.innerWidth)

  const xp = Math.round((event.clientX / window.innerWidth) * 255);
  const yp = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xp},${yp},0)`;
});
