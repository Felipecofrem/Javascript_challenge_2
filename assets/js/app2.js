const quant1 = document.querySelector ("#quant1");
const quant2 = document.querySelector ("#quant2");
const quant3 = document.querySelector ("#quant3");
const total = document.querySelector ("#total");
const answer = document.querySelector ("#answer");

inputQuant.addEventListener('click', () => {
const total = parseFloat(quant1.value)+parseFloat(quant2.value)+parseFloat(quant3.value);
if (total <= 10) {
    answer.textContent = "Llevas "+total+" stickers";
}
else answer.textContent = "Llevas demasiados stickers";
})