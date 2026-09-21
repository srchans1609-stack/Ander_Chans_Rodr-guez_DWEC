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

const videojuegos = [
  {
    nombre: "Grand Theft Auto V",
    compania: "Rockstar Games",
    plataforma: "PC / PS5 / Xbox Series X",
    valoracion: 9.7,
    precio: 29.99
  },
  {
    nombre: "Red Dead Redemption 2",
    compania: "Rockstar Games",
    plataforma: "PC / PS4 / Xbox One",
    valoracion: 9.8,
    precio: 59.99
  },
  {
    nombre: "The Legend of Zelda: Ocarina of Time",
    compania: "Nintendo",
    plataforma: "Nintendo 64 / 3DS",
    valoracion: 10,
    precio: 39.99
  },
  {
    nombre: "Assassin's Creed II",
    compania: "Ubisoft",
    plataforma: "PC / PS3 / Xbox 360",
    valoracion: 9.1,
    precio: 19.99
  },
  {
    nombre: "The Last of Us",
    compania: "Naughty Dog",
    plataforma: "PS3 / PS4 / PS5 / PC",
    valoracion: 9.8,
    precio: 49.99
  }
];

const cuerpoTabla = document.getElementById('cuerpoTabla');

if (cuerpoTabla) {
  cuerpoTabla.innerHTML = '';

  videojuegos.forEach(juego => {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td>${juego.nombre}</td>
      <td>${juego.compania}</td>
      <td>${juego.plataforma}</td>
      <td>${juego.valoracion}</td>
      <td class="precio-col">${juego.precio.toFixed(2)}&nbsp;&euro;</td>
    `;

    cuerpoTabla.appendChild(fila);
  });
}