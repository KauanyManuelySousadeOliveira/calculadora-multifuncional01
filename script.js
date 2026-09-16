function multiplicar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  document.getElementById("resultado").innerText =
    "Resultado: " + numero1 * numero2;
}

function dividir() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);

  if (numero2 === 0) {
    document.getElementById("resultado").innerText =
      "Resultado: Não é possível dividir por zero.";
    return;
  }
  document.getElementById("resultado").innerText =
    "Resultado: " + numero1 / numero2;
}
