// document.querySelector() --> element
const p4 = document.querySelector('#b p');
p4.style.color = 'blue';
p4.style.fontSize = '50px';

const li2 = document.querySelector('section#b ul li:nth-child(2');
li2.style.backgroundColor = 'green';

// document.querySelectorAll()

const p = document.querySelectorAll('p');
for (const i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'green';
}

const sectionB = document.querySelector('section#b');
const p1 = sectionB.getElementsByTagName('p')[0];
p1.style.backgroundColor = 'yellow';
