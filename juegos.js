
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

function cargarTabla() {
  if (!cuerpoTabla) return;
  

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


cargarTabla();


const btnAnadir = document.getElementById('btnAnadir');

if (btnAnadir) {
  btnAnadir.addEventListener('click', function() {

    const nombre = document.getElementById('nombre').value.trim();
    const compania = document.getElementById('compania').value.trim();
    const plataforma = document.getElementById('plataforma').value.trim();
    const valoracionRaw = document.getElementById('valoracion').value.trim();
    const precioRaw = document.getElementById('precio').value.trim();

    if (!nombre || !compania || !plataforma || !valoracionRaw || !precioRaw) {
      alert("Por favor, rellena todos los campos antes de añadir el juego.");
      return;
    }


    const valoracion = parseFloat(valoracionRaw);
    const precio = parseFloat(precioRaw);


    const nuevoJuego = {
      nombre: nombre,
      compania: compania,
      plataforma: plataforma,
      valoracion: valoracion,
      precio: precio
    };

    videojuegos.push(nuevoJuego);


    cargarTabla();


    document.getElementById('nombre').value = '';
    document.getElementById('compania').value = '';
    document.getElementById('plataforma').value = '';
    document.getElementById('valoracion').value = '';
    document.getElementById('precio').value = '';
  });
}