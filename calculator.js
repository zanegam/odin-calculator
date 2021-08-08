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
    getOperation(){
        switch(this.operation) {
            case 'divide':
                this.total /= this.getDisplayNum();
                break;
            case 'multiply':
                this.total *= this.getDisplayNum();
                break;
            case 'subtract':
                this.total -= this.getDisplayNum();
                break;
            case 'add':
                this.total += this.getDisplayNum();
                break;
        }
    }
}

let calc = new  Calculator;
const outputDisplay = document.querySelector('#output p')
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');
const pctButton = document.querySelector('#pct');
const operatorButtons = document.querySelectorAll('.operation');
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

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calc.opLastPressed = true;
        if(calc.total === 0){
            calc.total = calc.getDisplayNum();
            calc.operation = btn.value;
        }
        else {
            calc.getOperation(btn.value);
            changeDisplay();
            calc.operation = btn.value;
        }
    });
});

equalsButton.addEventListener('click', () => {
    calc.opLastPressed = true;
    calc.getOperation();
    changeDisplay();
});

function changeDisplay(){
    calc.display = calc.total;
    outputDisplay.textContent = calc.display;
}


