// const judul = document.getElementById('judul');
// judul.innerHTML = 'HELLO DUNIA;';

// const p = document.querySelector('section#a');
// p.innerHTML = '<p> tes </p>';

// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'blue';
// judul.style.color = 'green';

// const judul = document.querySelector('h1#judul');
// judul.setAttribute('id', 'judule');
// console.info(judul.getAttribute('id'));

// const a = document.querySelector('section#a a');
// console.info(a.getAttribute('href'));
// a.removeAttribute('href');

const p1 = document.querySelector('section#a .p1');
p1.classList.add('label');
// P1.classList.remove('label')
// p1.classList.toggle('label')

console.info(p1.classList.item(1));
console.info(p1.classList.contains('label'));

p1.classList.replace('label', 'betmen');
