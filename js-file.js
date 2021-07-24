let container = document.querySelector('#container')

let paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

let header3 = document.createElement('h3');
header3.textContent = "I'm a blue h3!";
header3.style.color = 'blue';
container.appendChild(header3);

let div = document.createElement('div');
div.style.border = "thick solid black";
div.style.backgroundColor = 'pink';
  let header1 = document.createElement('h1');
  header1.textContent = "I'm in a div!"
  let paragraph2 = document.createElement('p');
  paragraph2.textContent = "ME TOO!";
  div.appendChild(header1);
  div.appendChild(paragraph2);
container.appendChild(div);