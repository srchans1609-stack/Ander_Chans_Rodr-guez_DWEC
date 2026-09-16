console.log("¡Hola DWEC! Mi taller ya funciona.");

// 1. Recuperar elementos del DOM
const boton = document.getElementById('mi-boton');
const aviso = document.getElementById('aviso');

// 2. Variable contador
let contador = 0;

// 3. Escuchar clic y actualizar aviso
boton.addEventListener('click', function() {
  contador++;
  aviso.textContent = `Has pulsado el botón ${contador} ${contador === 1 ? 'vez' : 'veces'}.`;
});