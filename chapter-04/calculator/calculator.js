const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const numbersEl = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let dot = false;

numbersEl.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !dot) {
      dot = true;
    } else if (e.target.innerText === '.' && dot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
  });
});

operation.forEach( operation => {
  operation.addEventListener('click', (e)=>{
    if (!dis2Num) result;
    dot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation){
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    };
    clearDisplay2(operationName);
    lastOperation = operationName
  });
});


function clearDisplay2(name = " "){
  dis1Num += dis2Num + " " + name + " ";
  display1.innerText = dis1Num;
  display2.innerText = '';
  dis2Num = '';
} 

function mathOperation(){
  if (lastOperation === "x"){
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+"){
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-"){
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/"){
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%"){
    result = parseFloat(result) * parseFloat(dis2Num/100) ;
  }
};

equal.addEventListener('click', (e) => {
  if (!dis1Num || !dis2Num) return;
  dot = false;
  mathOperation();
  clearDisplay2();
  display1.innerText = result;
  dis2Num = result;
  dis1Num = '';
});

clearAll.addEventListener('click', (e) =>{
  display1.innerText = '0';
  display2.innerText = '0';
  dis1Num = '';
  dis2Num = '';
  result = '';
});

clearLastEl.addEventListener('click', (e) => {
  display2.innerText = display2.innerText.slice(0, -1);
  dis2Num = '';
})
