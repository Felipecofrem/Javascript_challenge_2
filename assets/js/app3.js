const digit1 = document.querySelector("#digit1");
const digit2 = document.querySelector("#digit2");
const digit3 = document.querySelector("#digit3");
const inputPass = document.querySelector("#inputPass");
const answerPass = document.querySelector("#answerPass");

inputPass.addEventListener('click', () => {

    const pass = digit1.value+digit2.value+digit3.value;
    if (pass == 911) {
        answerPass.textContent = "Password 1 correcto";
    }
    else if (pass == 714) {
        answerPass.textContent = "Password 2 correcto";
    }
    else {
        answerPass.textContent = "Password incorrecto";
    }
});

