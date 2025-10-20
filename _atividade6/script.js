function verificarRefeicao() {
  const input = document.getElementById("comidaInput").value;
  const paragrafo = document.getElementById("resultado");
  const comida = input.trim().toLowerCase();
  
  if (comida === "pão com ovo") {
    paragrafo.textContent = "Isso é café da manhã!";
  } 

  else if (comida === "feijão com arroz") {
    paragrafo.textContent = "Isso é almoço!";
  } 

  else {
    paragrafo.textContent = "Isso é jantar!";
  }
}
