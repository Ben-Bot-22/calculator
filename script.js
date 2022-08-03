let bottomDisplay = ''; //stores number buttons as pressed
let firstNumber = '';
let operation = '';
let topDisplay = ''; //stores equation
let solution = null;
let isLastButtonOperator = false;
const maxCharacters = 10;

// const buttonContainer = document.querySelector(".container"); //get numbers on display
const displayTop = document.querySelector(".top-display");
const displayBottom = document.querySelector(".bottom-display");
const clearButton = document.querySelector(".clear-btn");
const deleteButton = document.querySelector(".delete-btn");
const equal = document.querySelector(".equal");
const numberButtons = document.querySelectorAll(".num-btn"); //get numbers on display
const operators = document.querySelectorAll(".operator");

clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', backSpace);
equal.addEventListener('click', equalButton);
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', operateButton);
}
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', buttonShowOnDisplay);
}
//Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    console.log(e.key.toLowerCase());
    switch (e.key.toLowerCase())
    {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            showOnDisplay(e.key.toLowerCase());
            break;
        case 'clear':
            clearDisplay();
            break;
        case 'delete':
            backSpace();
            break;
        case '/':
        case '*':
        case '-':
        case '+':
            calcOperation(e.key.toLowerCase());
            break;
        case '=':
        case 'enter':
            equalButton();
            break;
    }
});

function buttonShowOnDisplay(e) {
    showOnDisplay(e.target.innerHTML.toString());
}

function showOnDisplay(num) {
    if (isLastButtonOperator) 
    {
        isLastButtonOperator = false;
        bottomDisplay = num;
    }
    else
    {
        if (num === '.') //special test for . only one allowed
        {
            if (!inputValid(bottomDisplay + num)) //if not valid return
            {
                return;
            }
        }
        bottomDisplay += num;
    }
    displayBottom.innerHTML = bottomDisplay;
}

function inputValid(testInput) {
    let numDecimal = 0;
    //input is valid if it contains 1 .
    for (const s of testInput) 
    {
        if (s === '.')
        {
            numDecimal++;
        }
    }
    return (numDecimal <= 1);
}

function clearDisplay(e) {
    updateBottomDisplay('');
    updateTopDisplay('');
    firstNumber = '';
    operation = '';
}

function backSpace(e) {
    updateBottomDisplay(bottomDisplay.slice(0, bottomDisplay.length - 1));
}

//Solve equation
function equalButton() {
    if (firstNumber === '') return; //fix undefined output when only 1 number is input
    if (operation === '/' && bottomDisplay === '0') {
        alert("Dividing by 0 is unsupported by the universe. Don't take it personally.");
        bottomDisplay = '';
        return;
    }
    solution = operate(operation, firstNumber, bottomDisplay);
    console.log(solution.toString().length);
    if (solution.toString().length > maxCharacters)
    {
        roundSolution();
    }
    updateTopDisplay(`${firstNumber} ${operation} ${bottomDisplay} = `);
    updateBottomDisplay(solution);
    operation = '';
}

function roundSolution()
{
    //if solution has a decimal
    let decimal = (solution - Math.floor(solution));
    if (decimal !== 0)
    {
        //count places after the decimal point
        let decimalPlaces = decimal.toString().length;
        //slotsTaken = number of places before and including the decimal point
        let slotsTaken = solution.toString().length - (decimalPlaces - 2); //subtract 2 for 0 & .
        //decimalPlacesAllowed = 10 - slotsTaken 
        let decimalPlacesAllowed = maxCharacters - slotsTaken;
        if (decimalPlacesAllowed < 0)
        {
            decimalPlacesAllowed = 0;
        }
        solution = solution.toFixed(decimalPlacesAllowed);
    }
}

function updateTopDisplay(num) {
    topDisplay = num; 
    displayTop.innerHTML = topDisplay;
}

function updateBottomDisplay(newText) {
    bottomDisplay = newText;
    displayBottom.innerHTML = bottomDisplay;
}

//wrapper to allow key events to use calcOperation
function operateButton(e) {
    calcOperation(e.target.innerHTML.toString());
}

function calcOperation(operationSelected) {
    // if operation is not null, evaluate
    if (operation !== '')
    {
        equalButton();
        firstNumber = bottomDisplay;
        operation = operationSelected;
    }
    else
    {
        firstNumber = bottomDisplay;
        operation = operationSelected;
        updateTopDisplay(`${firstNumber} ${operation}`);
    }
    isLastButtonOperator = true;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case 'x':
        case '*': 
            return multiply(a, b);
        case '/': return divide(a, b);
    }
}

/*
TODO:
- https://colorhunt.co/palette/fdebf7fbcaffffadf0fc28fb
*/

