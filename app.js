console.log("¡Hola DWEC! Mi taller ya funciona.");


const boton = document.getElementById('mi-boton');
const aviso = document.getElementById('aviso');
let contador = 0;
if (boton && aviso) {
  boton.addEventListener('click', function() {
    contador++;
    aviso.textContent = `Has pulsado el botón ${contador} ${contador === 1 ? 'vez' : 'veces'}.`;
  });
}

const btnModoNoche = document.getElementById('modonoche');

if (btnModoNoche) {
  btnModoNoche.addEventListener('click', function() {
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-claro')) {
      btnModoNoche.textContent = 'Modo oscuro';
    } else {
      btnModoNoche.textContent = 'Modo claro';
    }
  });
}