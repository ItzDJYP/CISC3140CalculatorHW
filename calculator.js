'use strict';

let calculation = '';
const display = document.getElementById('display');
const calculator = document.getElementById('buttons');

function updateDisplay() {
  display.value = calculation;
}

function evaluateCalculation() {
  try {
    calculation = eval(calculation).toString();
  } catch (error) {
    calculation = 'Error';
  }
  updateDisplay();
}

function clearCalculation() {
  calculation = '';
  updateDisplay();
}

// Event Delegation
calculator.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    const value = target.dataset.value;

    if (value !== undefined) {
      calculation += value;
      updateDisplay();
    } else if (target.id === 'equals') {
      evaluateCalculation();
    } else if (target.id === 'clear') {
      clearCalculation();
    }
  }
});
