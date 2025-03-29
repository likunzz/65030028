// script.js

let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let resultText = document.getElementById("result");

    if (userGuess == randomNumber) {
        resultText.textContent = "ถูกต้อง! คุณเดาถูกแล้ว 🎉";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "ผิด! ลองใหม่อีกครั้ง ❌";
        resultText.style.color = "red";
    }
}
