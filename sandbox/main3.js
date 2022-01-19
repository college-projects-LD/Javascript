show()

//declaration can be hoisted
function show() {
    console.log('test output')
} 
function addIT(n1,n2) {
    return (n1+n2);
};

let one = 3;

let two = 1;
console.log(addIT(one, two))
document.querySelector('#result').textContent = addIT(one, two);
// EXPRESSION cannot be hoisted

let add = function(number3,number4) {
    return(number3 + number4);
};

console.log(add(one, two))
document.querySelector('#result').textContent = add(one, two);

// ARROW -- efficient syntax no hoisting

let sum = (no1,no2) => {
    return (no1+no2);
};

console.log(sum(one, two))
document.querySelector('#result').textContent = sum(one, two);

const buttonELEMENT = document.getElementById('submitBUTTON');
// events
function copyINPUT() {
    const inputELEMENT = document.getElementById('inputBOX');
    const outputELEMENT = document.getElementById('output');
    outputELEMENT.textContent = inputELEMENT.value;
};

buttonELEMENT.addEventListener('click', copyINPUT);


function copyINPUTE(event) {
    console.log(event.target)
    const inputELEMENT = document.getElementById('inputBOX');
    const outputELEMENT = document.getElementById('output');
    outputELEMENT.textContent = inputELEMENT.value;
};

buttonELEMENT.addEventListener('mouseover', copyINPUTE);


const log = document.querySelector('#log')
document.addEventListener('keydown', logKey)


function logKey(e){
    console.log(e.code);
};

// array methods

// forEach method(do something with each item in array)

// example 1
const steps = ["one", "two", "three"];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);


