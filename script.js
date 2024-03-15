// script.js
function checkAnswer() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const result = num1 + num2;
    const userAnswer = parseInt(prompt(`What is ${num1} + ${num2}?`));

    const resultElement = document.getElementById('result');
    if (userAnswer === result) {
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Incorrect. Try again.';
    }
}
