// DOM-SELECTION
// document.getElementById() --> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'blue';

// document.getElementsByTagName() -->HTMLcollection
const p = document.getElementsByTagName('p');
for (const i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'green';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -->HTMLcollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'tes';
