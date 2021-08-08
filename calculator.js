class Calculator {
    constructor(){
        this.total = 0;
        this.display = 0;
        this.operation = null;
        this.opLastPressed = false;
    }
    getDisplayNum(){
        return Number(this.display);
    }
}

let calc = new  Calculator;
const outputDisplay = document.querySelector('#output p')
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');
const pctButton = document.querySelector('#pct');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const addButton = document.querySelector('#add');
const equalsButton = document.querySelector('#equals');

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calc.display === 0 || calc.opLastPressed? calc.display = btn.textContent: calc.display += btn.textContent;            
        outputDisplay.textContent = calc.display;
        calc.opLastPressed = false;
    });
});

clearButton.addEventListener('click', () =>{
    calc = new Calculator;
    outputDisplay.textContent = calc.display;
});

divideButton.addEventListener('click', () => {
    calc.opLastPressed = true;
    if(calc.total === 0){
        calc.total = calc.getDisplayNum();
        calc.operation = 'divide';
    }
    else {
        divideNumbers();
    }
});

multiplyButton.addEventListener('click', () => {
    calc.opLastPressed = true;
    if(calc.total === 0){
        calc.total = calc.getDisplayNum();
        calc.operation = 'divide';
    }
    else {
        multiplyNumbers();
    }
});

subtractButton.addEventListener('click', () => {
    calc.opLastPressed = true;
    if(calc.total === 0){
        calc.total = calc.getDisplayNum();
        calc.operation = 'minus';
    }
    else {
        subtractNumbers();
    }
});



addButton.addEventListener('click', () => {
    calc.opLastPressed = true;
    if(calc.total === 0){
        calc.total = calc.getDisplayNum();
        calc.operation = 'add';
    }
    else {
        addNumbers();
    }
});

equalsButton.addEventListener('click', () => {
    calc.opLastPressed = true;
    switch(calc.operation) {
        case 'divide':
            divideNumbers();
            break;
        case 'multiply':
            multiplyNumbers();
            break;
        case 'minus':
            subtractNumbers();
            break;
        case 'add':
            addNumbers();
            break;
    }
});

function changeDisplay(){
    calc.display = calc.total;
    outputDisplay.textContent = calc.display;
}

function divideNumbers(){
    calc.total /= calc.getDisplayNum();
    changeDisplay();
}

function multiplyNumbers(){
    calc.total *= calc.getDisplayNum();
    changeDisplay();
}

function subtractNumbers(){
    calc.total -= calc.getDisplayNum();
    changeDisplay();
}

function addNumbers(){
    calc.total += calc.getDisplayNum();
    changeDisplay();
}

