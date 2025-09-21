let amigos = [];

console.log (amigos);

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
  } else {
    amigos.push(nombre);
    mostrarLista();
  }

  input.value = "";
  input.focus();
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  let texto = "";

  for (let i = 0; i < amigos.length; i++) {
    texto = texto + amigos[i] + " ";
  }

  lista.innerHTML = texto;
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎉 El amigo secreto es: " + amigoSecreto;
}
