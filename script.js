let displayValue = "0";
let firstOperand  = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;

}

function clearDisplay() {
    displayValue = '0';
    firstOperand =null;
    operator=null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number){
    if (waitingForSecondOperand) {
        displayValue =number;
        waitingForSecondOperand =false;
    }else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}
function appendOperator(op) {
    if(firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (operator) {
        const result = calculate();
        displayValue = String(result);
        firstOperand = result;
    }
    operator = op;
    waitingForSecondOperand = true;
    updateDisplay();
}
function calculate() {
    if (operator && waitingForSecondOperand) return;

    const secondOperand = parseFloat(displayValue);
    let result = firstOperand;

    if (operator === '+') {
        result += secondOperand;
    } else if (operator === '-') {
        result -= secondOperand;
    } else if (operator === '*') {
        result *= secondOperand;
    } else if (operator === '/') {
        result /= secondOperand;
}

displayValue = String(result);
firstOperand = null;
operator = null;
waitingForSecondOperand = false;
updateDisplay();
}