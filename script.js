let bottomDisplay = ''; //stores number buttons as pressed
let topDisplay = ''; //stores equation

const buttonContainer = document.querySelector(".container");
const displayTop = document.querySelector(".top-display");
const displayBottom = document.querySelector(".bottom-display");
buttonContainer.addEventListener('click', showOnDisplay);

function showOnDisplay(e) {
    // console.log(e.target.nodeName);
    const isButton = e.target.nodeName === "BUTTON";
    if (!isButton) return;
    bottomDisplay += e.target.innerHTML.toString();
    displayBottom.innerHTML = bottomDisplay;
}

/*
TODO:

1) store the first number that is input into the calculator when a user presses an operator 
2) also save which operation has been chosen
3) operate() on them when the user presses the “=” key.
4) once operate() has been called, update the display with the ‘solution’ to the operation.
5) implement clear button
6) implement back button
 

Users should be able to string together several operations and get the right answer, 
with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. 

Your calculator should not evaluate more than a single pair of numbers at a time. 
Example: you press a number button (12), followed by an operator button (+), a second number button (7), 
and finally a second operator button (-). 
Your calculator should then do the following: 
first, evaluate the first pair of numbers (12 + 7), 
second, display the result of that calculation (19), and 
finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

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
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    }
}


/*
TODO:
- https://colorhunt.co/palette/fdebf7fbcaffffadf0fc28fb

*/

