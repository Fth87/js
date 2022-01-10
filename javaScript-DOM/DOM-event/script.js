const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

function ubahWarna1() {
  p1.style.backgroundColor = 'green';
}

function ubahWarna2() {
  p2.style.backgroundColor = 'green';
}

p2.onclick = ubahWarna2;

nambah = function () {
  const ul = document.querySelector('section#b ul');
  const newLi = document.createElement('li');
  const innerLi = document.createTextNode('li baru');

  newLi.appendChild(innerLi);
  ul.appendChild(newLi);
};

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', nambah);

// pada on click biasa akan nimpa

const p3 = document.querySelector('.p3');

// p3.onclick = function(){
//     p3.style.backgroundColor = 'green';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }

p3.addEventListener('click', function () {
  p3.style.backgroundColor = 'green';
});
p3.addEventListener('click', function () {
  p3.style.color = 'red';
});
