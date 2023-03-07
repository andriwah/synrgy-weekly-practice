// NO.1
// background
const bgColor = document.getElementById('background-color');
bgColor.addEventListener('change', changeBackgroundColor);

function changeBackgroundColor() {
  getColorBg = bgColor.value;
}

// color title
const colorTitle = document.getElementById('color-title');
colorTitle.addEventListener('change', changeTitleColor);

function changeTitleColor() {
  getColorTitle = colorTitle.value;
}

// button
const button = document.getElementById('button');
button.addEventListener('click', changeColor);
let getColorBg = '';
let getColorTitle = '';

function changeColor(event) {
  event.preventDefault();
  document.body.style.backgroundColor = getColorBg;
  document.getElementById('title').style.color = getColorTitle;
}

// NO.2
// Get element
let boxGreen = document.getElementById('box-1');
let boxBlue = document.getElementById('box-2');

// Remove element
function removeGreen() {
  boxGreen.remove();
}

function removeBlue() {
  boxBlue.remove();
}

// Reset Element
const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', resetElement);

function resetElement() {
  let count = document.getElementById('list-box').childElementCount;
  if (count != 0) {
    return false;
  }

  const green = document.createElement('div');
  green.setAttribute('id', 'box-1');
  green.addEventListener('click', removeGreen);
  green.style.backgroundColor = 'green';

  const blue = document.createElement('div');
  blue.setAttribute('id', 'box-2');
  blue.addEventListener('click', removeBlue);
  blue.style.backgroundColor = 'blue';

  document.getElementById('list-box').append(green);
  document.getElementById('list-box').append(blue);

  boxGreen = green;
  boxBlue = blue;
}

// NO.3
// Get Element
const buttonSubmit = document.getElementById('button-submit');
buttonSubmit.addEventListener('click', addElement);

const contentBox = document.getElementById('content-box');

function addElement() {
  let inputText = document.getElementById('input-text');
  let newParagraph = document.createElement('p');
  let textNode = document.createTextNode(inputText.value);
  newParagraph.className = 'new-paragraph';
  newParagraph.appendChild(textNode);

  
  contentBox.append(newParagraph);

  inputText.value = null
}

const deleteElement = document.getElementById('button-delete');
deleteElement.addEventListener('click', removeElement);

function removeElement() {
  // const paragraphCollection = document.getElementsByClassName('new-paragraph')

  // const paragraphArray = [...paragraphCollection];
  // // paragraphArray.map((pArray) => {
  // //   pArray.removeChild()
  // // })
  contentBox.removeChild(contentBox.firstElementChild)
  
}

