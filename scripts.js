const progressBar = document.getElementById("progress-bar");
const porcentaje = document.getElementById("porcentaje");
const preloader = document.getElementById("preloader");
const carta = document.querySelector(".carta");
const main = document.querySelector("main");

let progress = 0;

// Simulamos una carga (podrías reemplazar esto con progreso real)
const interval = setInterval(() => {
  progress += Math.floor(Math.random() * 10) + 5; // Avanza 5–15%
  if (progress > 100) progress = 100;

  // Actualizamos la barra
  progressBar.style.width = progress + "%";
  porcentaje.textContent = progress + "%";

  // Cuando llega al 100%
  if (progress === 100) {
    clearInterval(interval);

    // Espera a que termine la transición antes de ocultar el preloader
    setTimeout(() => {
        // ✅ Detenemos el giro con suavidad
        carta.style.animation = "none"; // elimina la animación infinita
        carta.style.transition = "transform 0.8s ease-out";
        carta.style.transform = "rotateY(180deg)"; // vuelve a posición inicial
        preloader.classList.add("hidden");
        main.classList.add("visible");
    }, 500);
  }
}, 200);

// Animacion de escritura titulo
const frases = [
  "Técnico Superior en Desarrollo de Aplicaciones Web.",
  "Desarrollador Full Stack."
];

const texto = document.querySelector(".text");
let i = 0;  // frase
let j = 0;  // letra
let borrando = false;

function type() {
  const frase = frases[i];

  if (!borrando) {
    texto.textContent = frase.substring(0, j++);
    if (j > frase.length) {
      borrando = true;
      setTimeout(type, 2500);
      return;
    }
  } else {
    texto.textContent = frase.substring(0, j--);
    if (j < 0) {
      borrando = false;
      i = (i + 1) % frases.length;
    }
  }

  const velocidad = borrando ? 60 : 60;
  setTimeout(type, velocidad);
}

type();