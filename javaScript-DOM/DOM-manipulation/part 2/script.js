//DOM Manipulation
//buat element baru

pBaru = document.createElement('p');
innerP = document.createTextNode('paragraf baru');

//simpan tulisan ke p
pBaru.appendChild(innerP);

// simpan p baru ke section a

sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//
const liBaru = document.createElement('li');
const innerLi = document.createTextNode('item baru');
liBaru.appendChild(innerLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//remove element

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replace

const sectionB = document.getElementById('b');
const pReplace = sectionB.querySelector('p');

const h1Baru = document.createElement('h1');
const innerH1 = document.createTextNode('JUDUL BARU!');

h1Baru.appendChild(innerH1);

sectionB.replaceChild(h1Baru, pReplace);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h1Baru.style.backgroundColor = 'lightgreen';