let adult = true;
let age = "24";
const profession = "Instructor";

if (adult) {
  var myName = "Bob";
}

//console.log(myName);

let newnum = Number(age) + 3;

console.log(newnum);

let myVariable = 4;

//

myVarible = 6;

console.log(myVarible);



//alert(myVariable);

document.querySelector('#main_title').textContent="New Output";

document.getElementById('main_title').innerHTML = "Hello World";
document.querySelector('ul').innerHTML="<li> list item one</li>"
let date = new Date();

let year = date.getFullYear();

document.querySelector('#main_title').textContent = year;

//1. create 2. add content 3. add to the page
let para = document.createElement('p');

para.innerHTML = '<h1> this is my text for my paragraph </h1>';

document.body.appendChild(para);



function show() {
    console.log('this is it');
}

show();
let num1 =2;
let num2 = 4;

function addIt(n1, n2) {
    return(n1+n2)
}

console.log(addIt(num1, num2));

document.querySelector('section').textContent = addIt(num1,num2);

let mypic = 'imges/IMG951670.jpg';
document.querySelector('img').setAttribute('src',mypic);
document.querySelector('img').setAttribute('width',300);
document.querySelector('img').setAttribute('alt', "landon blue-green shirt");

let classes = ['cse121b', 'cse111', 'eng113', 'rel250',];

console.log(classes);

console.log(classes[1]);

classes[1] = 'programming_with_functions';

classes.push('cit222');

document.querySelector('.courses').textContent = classes.join(', ');

classes.shift();

document.querySelector('.courses').textContent = classes.join(', ');

classes.splice([2, 2]);
document.querySelector('.courses').textContent = classes.join(', ');

classes.pop();
document.querySelector('.courses').textContent = classes.join(', ');