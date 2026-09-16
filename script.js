function calcularSoma(a, b) {
  return a + b;
}
function calcularSubtracao(a, b) {
  return a - b;
}
function calcularMultiplicacao(a, b) {
  return a * b;
}
function calcularDivisao(a, b) {
  if (b === 0) return "Não é possível dividir por zero.";
  return a / b;
}

function somar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  document.getElementById("resultado").innerText =
    "Resultado: " + calcularSoma(numero1, numero2);
}

function subtrair() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  document.getElementById("resultado").innerText =
    "Resultado: " + calcularSubtracao(numero1, numero2);
}

function multiplicar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  document.getElementById("resultado").innerText =
    "Resultado: " + calcularMultiplicacao(numero1, numero2);
}

function dividir() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  document.getElementById("resultado").innerText =
    "Resultado: " + calcularDivisao(numero1, numero2);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    calcularSoma,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao,
  };
}
