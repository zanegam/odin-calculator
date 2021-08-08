class Calculator {
    constructor(){
        this.total = 0;
        this.display = 0;
        this.operation = null;
        this.opLastPressed = false;
        this.lastEntry = 0;
    }
    getLastEntryNum(){
        return Number(this.lastEntry);
    }
    getOperation(){
        switch(this.operation) {
            case 'divide':
                this.total /= this.getLastEntryNum();
                break;
            case 'multiply':
                this.total *= this.getLastEntryNum();
                break;
            case 'subtract':
                this.total -= this.getLastEntryNum();
                break;
            case 'add':
                this.total += this.getLastEntryNum();
                break;
        }
    }
}

let calc = new  Calculator;
const outputDisplay = document.querySelector('#output p')
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');
const posNegButton = document.querySelector('#pos-neg');
const pctButton = document.querySelector('#pct');
const operatorButtons = document.querySelectorAll('.operation');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equals');

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calc.display === 0 || calc.opLastPressed? calc.lastEntry = btn.textContent: calc.lastEntry += btn.textContent; 
        calc.display = calc.lastEntry;           
        outputDisplay.textContent = calc.display;
        calc.opLastPressed = false;
    });
});

clearButton.addEventListener('click', () =>{
    calc = new Calculator;
    outputDisplay.textContent = calc.display;
});

posNegButton.addEventListener('click', () => {
    calc.lastEntry = calc.getLastEntryNum() * (-1);
    calc.display = calc.lastEntry;
    outputDisplay.textContent = calc.display;
});

pctButton.addEventListener('click', () => {
    if(calc.lastEntry !== 0){
        calc.lastEntry = calc.getLastEntryNum() / (100);
        calc.display = calc.lastEntry;
        outputDisplay.textContent = calc.display;
    } 
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calc.opLastPressed = true;
        if(calc.total === 0){
            calc.total = calc.getLastEntryNum();
            calc.operation = btn.value;
        }
        else {
            calc.getOperation(btn.value);
            changeDisplay();
            calc.operation = btn.value;
        }
    });
});

decimalButton.addEventListener('click', () => {
    if(!calc.lastEntry.toString().includes('.')) {
        calc.lastEntry += '.';
        calc.display = calc.lastEntry;
        outputDisplay.textContent = calc.display;
    }
})

equalsButton.addEventListener('click', () => {
    calc.opLastPressed = true;
    calc.getOperation();
    changeDisplay();
});

function changeDisplay(){
    calc.display = calc.total;
    outputDisplay.textContent = calc.display;
}


