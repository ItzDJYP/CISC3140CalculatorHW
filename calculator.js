'use strict';

let calculation = '';
let previousAnswer = '';
let justEvaluated = false;

const display = document.getElementById('display');
const calculator = document.getElementById('buttons');

function updateDisplay() {
  display.value = calculation;
}

function evaluateCalculation() {
  try {
    const result = eval(calculation);
    previousAnswer = result.toString();
    calculation = previousAnswer;
    justEvaluated = true;
  } catch (error) {
    calculation = 'Error';
  }
  updateDisplay();
}

function clearCalculation() {
  calculation = '';
  justEvaluated = false;
  updateDisplay();
}

// Event Delegation for buttons
calculator.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    const value = target.dataset.value;

    if (value !== undefined) {
      if (justEvaluated) {
        // If last action was equals and user now types a number/operator, reset display
        calculation = '';
        justEvaluated = false;
      }

      if (value === 'Ans') {
        calculation += previousAnswer;
      } else {
        calculation += value;
      }

      updateDisplay();
    } else if (target.id === 'equals') {
      evaluateCalculation();
    } else if (target.id === 'clear') {
      clearCalculation();
    }
  }
});
