const inputBox = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

let openParenthesis = false; 
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === '=') {
      try {
        inputBox.value = eval(inputBox.value);
      } catch (error) {
        inputBox.value = 'Error';
      }
    } else if (buttonText === 'AC') {
      inputBox.value = '';
    } else if (buttonText === 'DEL') {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (buttonText === 'x²') {
      inputBox.value = Math.pow(parseFloat(inputBox.value), 2);
    } else if (buttonText === '√') {
      inputBox.value = Math.sqrt(parseFloat(inputBox.value));
    } else if (buttonText === 'MOD') {
      inputBox.value += '%';
    } else if (buttonText === 'ABS') {
      inputBox.value = Math.abs(parseFloat(inputBox.value));
    } else if (buttonText === '(') {
      if (!openParenthesis) {
        inputBox.value += '(';
        openParenthesis = true;
      }
    } else if (buttonText === ')' && openParenthesis) {
      inputBox.value += ')';
      openParenthesis = false;
    } else {
      inputBox.value += buttonText;
    }
  });
});
