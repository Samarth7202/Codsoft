// script.js
let currentInput = '';

function appendValue(value) {
  const resultField = document.getElementById('result');
  if (currentInput === '0' && value !== '.') {
    currentInput = '';
  }
  currentInput += value;
  resultField.value = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  document.getElementById('result').value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    if (!isFinite(currentInput)) {
      throw new Error("Invalid operation");
    }
    document.getElementById('result').value = currentInput;
  } catch (error) {
    document.getElementById('result').value = "Error";
    currentInput = '';
  }
}
