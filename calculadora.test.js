const {
  calcularSoma,
  calcularSubtracao,
  calcularMultiplicacao,
  calcularDivisao,
} = require("./script.js");

console.log("Iniciando testes matemáticos...");

if (calcularSoma(5, 5) !== 10)
  throw new Error("Falha no teste de Soma (5 + 5 deveria ser 10)");

if (calcularSubtracao(10, 4) !== 6)
  throw new Error("Falha no teste de Subtração (10 - 4 deveria ser 6)");

if (calcularMultiplicacao(4, 5) !== 20)
  throw new Error("Falha no teste de Multiplicação (4 * 5 deveria ser 20)");

if (calcularDivisao(10, 2) !== 5)
  throw new Error("Falha no teste de Divisão (10 / 2 deveria ser 5)");

if (calcularDivisao(10, 0) !== "Não é possível dividir por zero.") {
  throw new Error("Falha no teste de Divisão por zero");
}

console.log("====================================");
console.log("✅ TODOS OS TESTES MATEMÁTICOS PASSARAM!");
console.log("====================================");
