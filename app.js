function verificarCapicua() {
  let n = document.getElementById("numero").value;
  let resultado = document.getElementById("resultado");

  let invertido = "";

  for (let i = n.length - 1; i >= 0; i--) {
    invertido += n[i];
  }

  if (n === invertido) {
    resultado.textContent = "Es capicúa";
    resultado.className = "text-green-700 bg-green-100 p-4 rounded-xl text-center";
  } else {
    resultado.textContent = "No es capicúa";
    resultado.className = "text-red-700 bg-red-100 p-4 rounded-xl text-center";
  }
}