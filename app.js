//doc steven 2023/2024 remodelando sistema generador de colores aleatorios.
//nuevo: generador de paleta de colores.
//remodelado: todo por buenas practicas ya aprendidas y una que otra cosa.

//creando variables y enlazando a sus respectivas etiquetas html ademas de agregarle un evento de tipo click
const boton = document.getElementById("boton").addEventListener("click", papa);
const copiar = document
  .getElementById("copiar")
  .addEventListener("click", otraPapa);
const paleta = document
  .getElementById("paleta")
  .addEventListener("click", gustaPapa);

//esto ni lo toque almenos almacen 1 guardan los valores del fondo y paleta en hexadecimal para facilitar su uso
let almacen;
let almacen2 = [];
const jsDiv = document.getElementById("js-div");

//eventos click de las etiquetas html cambia y copia el color por dar clicks en sus respectivos botones
function papa() {
  document.body.style.backgroundColor = papaColor();
  console.log("saido chesto!!");
}

function otraPapa() {
  navigator.clipboard.writeText(almacen);
  if (!almacen) {
    console.log("amigo primero genera algo no?");
  }
  console.log("segundo check");
}

//funcion genera un valor hexadecimal pseudoaleatorio
function papaColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  almacen = color;
  console.log("color-check");
  return color;
}

//evento cambia color de la paleta de colores y los copia
function gustaPapa() {
  const token = document.querySelectorAll(".token");
  almacen2.splice(0, almacen2.length);
  token.forEach((hola) => {
    hola.style.backgroundColor = papaColor();
    almacen2.push(almacen);
    navigator.clipboard.writeText(almacen2);
  });
}

//bucle que genera 4 div con clase="token" y los agrupa dentro de jsDiv
for (let i = 0; i < 4; i++) {
  const token = document.createElement("div");
  token.classList.add("token");
  jsDiv.appendChild(token);
}

//remodelado pero no listo para la implementacion en el proyecto mayor
//cualquier error hacer saber para arreglo