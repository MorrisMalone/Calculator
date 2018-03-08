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
    if (operator === '+') {return add(a,b);};
    if (operator === '-') {return substract(a, b);};
    if (operator === '*') {return multiply(a,b);};
    if (operator === '/' && b !== 0) {return divide(a,b);}
    if (operator === '/' && b === 0) return '!OOPS!';
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
let checkEgal = true;

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
            
        } else if (button.id === 'back') {

            if (number1[0] !== '-') {
                number1.unshift('-');
            }
            printResult(number1.join(''));

        } else if (button.classList.value.slice(0, 8) === 'operator' && number2.length === 0) {

            operatorChoice = button.id;
            if (checkEgal) {calcul.push(number1.join(''));};

            if (calcul.length < 2) {
                calcul.push(operatorChoice);
            } else if (calcul.length>1 && checkEgal) {
                console.log(calcul.pop());
                calcul.pop();
                calcul.push(operatorChoice);
            } else {
                calcul.push(operatorChoice);
                checkEgal = true;
            }
            printCalcul(calcul);
            console.log(calcul);


        } else if (button.classList.value.slice(0, 8) === 'operator' && number2.length > 0) {

            let total = operate(operatorChoice, number1, number2);
            printResult(total);
            operatorChoice =  button.id;

            calcul.push(number2.join(''));
            calcul.unshift('(');
            calcul.push(')');
            calcul.push(operatorChoice);
            printCalcul(calcul);

            number1 = total.toString().split('');
            number2 = [];
            check = false;
            
        } else if (button.id === 'equal') {

            calcul.push(number2.join(''));
            calcul.unshift('(');
            calcul.push(')');
            printCalcul(calcul);
            let total = operate(operatorChoice, number1, number2);
            operatorChoice =  '';
            printResult(total);
            number1 = total.toString().split('');
            number2 = [];
            check = false;
            checkEgal = false;

        } else if (button.id === 'clear') {
            clear();
        }
        console.log(number1, number2, operatorChoice);
    })
})
