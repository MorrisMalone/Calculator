function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a.join(''));
    b = Number(b.join(''));
    if (operator === 'add') {return add(a,b);};
    if (operator === 'substract') {return substract(a, b);};
    if (operator === 'multiply') {return multiply(a,b);};
    if (operator === 'divide' && b !== 0) {return divide(a,b);}
    if (operator === 'divide' && b === 0) return '!OOPS!';
}

function clear() {
    number1 = [];
    number2 = [];
    calcul = [];
    operatorChoice = '';
    check = true;
    printResult('0');
    printCalcul(calcul);
}

function printResult(total) {
    const result = document.querySelector('#result');
    result.textContent = total;
}

function printCalcul(str) {
    theCalcul = str.join('');
    const currentCalcul = document.querySelector('#calcul');
    currentCalcul.textContent = theCalcul;
}

function makeCalcul(calcul) {
    if (calcul.)
}

function checkIfDot(number) {
    return !(number.some(noDot));
}

let noDot = function(element) {
    return element === '.';
}

function getValue(button) {

}

const buttons = document.querySelectorAll('button');
let calcul = [];
let number1 = [];
let number2 = [];
let operatorChoice = '';
let check = true;

//const buttonClass = button.classList.value;
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {

        if (check && (button.classList.value.slice(0, 6) === 'number' && operatorChoice === '')) {

            number1.push(button.id);
            printResult(number1.join(''));

        }  else if (button.classList.value.slice(0, 6) === 'number' && operatorChoice !== '') {

            number2.push(button.id);
            printResult(number2.join(''));

        } else if (button.id === 'dot') {

            if (checkIfDot(number1) && check) {
                number1.push('.');
                printResult(number1.join(''));
            } else if (checkIfDot(number2) && operatorChoice !== '') {
                number2.push('.');
                printResult(number2.join(''));
            }

        } else if (button.id === 'del') {

            if (number1.length > 0 && check ) {
                number1.pop();
                printResult(number1.join(''));

            } else if (number2.length > 0 && operatorChoice !== '') {
                number2.pop();
                printResult(number2.join(''));
            }
            
        } else if (button.classList.value.slice(0, 8) === 'operator' && number2.length === 0) {

            operatorChoice = button.id;
            calcul.push(number1.join(''));
            console.log(calcul);
            printCalcul(calcul);

        } else if (button.classList.value.slice(0, 8) === 'operator' && number2.length > 0) {

            let total = operate(operatorChoice, number1, number2);
            printResult(total);
            operatorChoice =  button.id;
            number1 = total.toString().split('');
            number2 = [];
            check = false;
            
        } else if (button.id === 'equal') {

            let total = operate(operatorChoice, number1, number2);
            operatorChoice =  '';
            printResult(total);
            number1 = total.toString().split('');
            number2 = [];
            check = false;

        } else if (button.id === 'clear') {
            clear();
        }
        console.log(number1, number2, operatorChoice);
    })
})
