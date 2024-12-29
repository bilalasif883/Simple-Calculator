let SecondNumber = '';
let FirstNumber = '';
let Sign = null;

const display = document.getElementById('display');

function ClickAdd(number) 
{
    if (number === '.' && SecondNumber.includes('.'))
        return;
    SecondNumber = SecondNumber.toString() + number.toString();
    updateDisplay();
}

function SelectSign(op) 
{
    if (SecondNumber === '')
        return;
    if (FirstNumber !== '')
        calculate();
    Sign = op;
    FirstNumber = SecondNumber;
    SecondNumber = '';
}

function calculate() 
{
    let answer;
    const firstNum = parseFloat(FirstNumber);
    const secondNum = parseFloat(SecondNumber);
    if (isNaN(firstNum) || isNaN(secondNum)) return;
    switch (Sign) {
        case '+':
            answer = firstNum + secondNum;
            break;
        case '-':
            answer = firstNum - secondNum;
            break;
        case '*':
            answer = firstNum * secondNum;
            break;
        case '/':
            answer = secondNum === 0 ? 'Error' : firstNum / secondNum;
            break;
        default:
            return;
    }
    SecondNumber = answer;
    Sign = null;
    FirstNumber = '';
    updateDisplay();
}

function clearDisplay() 
{
    SecondNumber = '';
    FirstNumber = '';
    Sign = null;
    updateDisplay();
}

function updateDisplay() 
{
    display.innerText = SecondNumber || '0';
}

clearDisplay();