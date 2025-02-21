// Clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Append a number or operator to the display
function appendNumber(number) {
  document.getElementById('display').value += number;
}

// Append an operator
function appendOperator(operator) {
  document.getElementById('display').value += operator;
}

// Calculate the result
function calculateResult() {
  const display = document.getElementById('display');
  try {
      display.value = eval(display.value);
  } catch (error) {
      display.value = 'Error';
  }
}

// Square root functionality
function squareRoot() {
  const display = document.getElementById('display');
  display.value = Math.sqrt(display.value);
}

// Square functionality
function square() {
  const display = document.getElementById('display');
  display.value = Math.pow(display.value, 2);
}

// Inverse functionality
function inverse() {
  const display = document.getElementById('display');
  display.value = 1 / display.value;
}

// Negate functionality
function negate() {
  const display = document.getElementById('display');
  display.value = -display.value;
}