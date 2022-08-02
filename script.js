let bottomDisplay = ''; //stores number buttons as pressed
let firstNumber = '';
let operation = '';
let topDisplay = ''; //stores equation
let solution = null;
let isLastButtonOperator = false;

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
    // console.log(operators[i]);
    operators[i].addEventListener('click', operateButton);
}
for (let i = 0; i < numberButtons.length; i++) {
    // console.log(numberButtons[i]);
    numberButtons[i].addEventListener('click', showOnDisplay);
}

function showOnDisplay(e) {
    console.log("showOnDisplay " + e);
    // const isButton = e.target.nodeName === "BUTTON";
    // if (!isButton) return;
    if (isLastButtonOperator)
    {
        isLastButtonOperator = false;
        bottomDisplay = e.target.innerHTML.toString();
    }
    else
    {
        bottomDisplay += e.target.innerHTML.toString();
    }
    displayBottom.innerHTML = bottomDisplay;
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
function equalButton(e) {
    solution = operate(operation, firstNumber, bottomDisplay);
    updateTopDisplay(`${firstNumber} ${operation} ${bottomDisplay} = `);
    updateBottomDisplay(solution);
    operation = '';
}

function updateTopDisplay(num) {
    topDisplay = num; //`${firstNumber} ${operation}`;
    displayTop.innerHTML = topDisplay;
}

function updateBottomDisplay(newText) {
    bottomDisplay = newText;
    displayBottom.innerHTML = bottomDisplay;
}

function operateButton(e) {
    // if operation is not null, evaluate
    if (operation !== '')
    {
        equalButton(e);
        firstNumber = bottomDisplay;
        operation = e.target.innerHTML.toString();
    }
    else
    {
        firstNumber = bottomDisplay;
        operation = e.target.innerHTML.toString();
        updateTopDisplay(`${firstNumber} ${operation}`);
    }
    isLastButtonOperator = true;
}

/*
TODO:
- Disable decimal if already one in display
- Keyboard support
- Round answers with long decimals so that they don’t overflow the screen.
- Pressing = before entering all of the numbers or an operator could cause 
    problems!
- Pressing “clear” should wipe out any existing data.. 
    make sure the user is really starting fresh after pressing “clear”
- Display a snarky error message if the user tries to divide by 0… 
    and don’t let it crash your calculator!
- Readme
*/

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
        case 'x': return multiply(a, b);
        case '/': return divide(a, b);
    }
}


/*
TODO:
- https://colorhunt.co/palette/fdebf7fbcaffffadf0fc28fb
*/

