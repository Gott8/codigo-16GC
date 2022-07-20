const autos = [
    {
      marca: "Mercedes Benz",
      imagen:
        "https://www.mercedes-benz.com.pe/documents/13378736/13381466/GLE+COUP%C3%89+2+336X147+PNG.png/7d86667b-177a-57ee-5296-a945d0a93faa?t=1649456304569",
      nombre: "Mercedes-Benz GLE Coupe",
      vendedor: "AutoWorld",
      precioOferta: 111.999,
      precioNormal: 122.909,
      calificacion: 4.5,
      caracteristicas: {
        tipoDeCaja: "AT",
        motor: "3.6",
        arranqueDual: true,
        tipoDeCarroceria: "SUV",
      },
    },
    {
      marca: "Mercedes Benz",
      imagen:
        "https://www.mercedes-benz.com.pe/documents/13378736/16590004/CLS350_Variable336x147%282%29.png/5dae8715-a25b-bcca-6cf6-fb56027a92d3?t=1651096069845",
      nombre: "Mercedes-Benz CLS",
      vendedor: "AutoWorld",
      precioOferta: 100.999,
      precioNormal: 115.909,
      calificacion: 4,
      caracteristicas: {
        tipoDeCaja: "MT",
        motor: "2.0",
        arranqueDual: true,
        tipoDeCarroceria: "sedan",
      },
    },
    {
      marca: "Mercedes Benz",
      imagen:
        "https://www.mercedes-benz.com.pe/documents/13373260/13374712/clase-g-lateral.png/95a7dc5d-6b87-464e-9f7a-71c21ec9c987?t=1641308061000",
        nombre: "Mercedes-Benz Clase G",
        vendedor: "AutoWorld",
        precioOferta: 125.999,
        precioNormal: 132.459,
        calificacion: 4.5,
        caracteristicas: {
          tipoDeCaja: "AT",
          motor: "5.0",
          arranqueDual: true,
          tipoDeCarroceria: "SUV",
      },
    },
    {
      marca: "Audi",
      imagen:
        "https://audishop.pe/wp-content/uploads/2021/04/Q8-Ambition-55-TFSI-quattro-Tiptronic-Azul-Galaxia-diag-del-300x300.png",
      nombre: "Audi Q8",
      vendedor: "AutoWorld",
        precioOferta: 112.997,
        precioNormal: 90.991,
        calificacion: 5,
        caracteristicas: {
          tipoDeCaja: "AT",
          tamañoDeMotor: "3.5",
          arranqueDual: true,
          tipoDeCarroceria: "SUV",
      },
    },
    {
      marca: "Audi",
      imagen:
        "https://audishop.pe/wp-content/uploads/2022/04/A5-Plata-florette-DEL-300x300.png",
        nombre: "Audi A5",
        vendedor: "AutoWorld",
          precioOferta: 54.997,
          precioNormal: 79.992,
          calificacion: 4,
          caracteristicas: {
            tipoDeCaja: "MT",
            tamañoDeMotor: "2.6",
            arranqueDual: true,
            tipoDeCarroceria: "SUV",
      },
    },
    {
      marca: "Audi",
      imagen:
        "https://audishop.pe/wp-content/uploads/2022/05/Azul-Atolon-DEL-300x300.png",
        nombre: "Audi A3",
        vendedor: "AutoWorld",
          precioOferta: 36.997,
          precioNormal: 39.992,
          calificacion: 3.5,
          caracteristicas: {
            tipoDeCaja: "MT",
            tamañoDeMotor: "2.0",
            arranqueDual: true,
            tipoDeCarroceria: "SUV",
      },
    },
  ];
  
  const container = document.querySelector(".contenedor");
// vamos a obtener el input y el boton
// lo que seria incorreacto es poner
// container = document.querySelector("#input-search");

const inputSearch = document.querySelector("#input-search");
const btnSearch = document.querySelector("#btn-search");

function createCards(arrayDeDatos) {
  // Se acuerdan que el otro dia mencionamos que antes de una iteracion debemos
  // limiar el container
  container.innerHTML = "";

  if (arrayDeDatos.length === 0) {
    container.innerHTML = "<h2>No se encontro resultados</h2>";
    // recurden que el return detiene la ejecuion de la funcion
    return;
  }

  // quiero agregar elemenos al container
  arrayDeDatos.map((auto) => {
    // ahora en esta seccion vamos a crear los card
    // Esto es JS se llama template string => ``
    // Sirve para poder tener texto y variable juntos
    // return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
    container.innerHTML += `
  <div class="card">
      <h4 class="title">${auto.nombre}</h4>
        <div class="container-photo">
        <img
            src=${auto.imagen}
            alt=""
            width="300"
        />
        </div>
        <div class="container-price">
          <p class="price">Precio: S/ ${auto.precioNormal}</p>
          <p class="sale-price">Oferta: S/ ${auto.precioOferta}</p>
        </div>
        <button class="btn-buy">Comprar</button>
  </div>
   `;
  });
}

createCards(autos);

//que evento usando lara capturar el click de un boton
btnSearch.onclick = function () {
  // al darle al boton necesitamos obtener el texto del input
  const textSearch = inputSearch.value;
  // Seria buena idea validar que el input este lleno?
  // Si el input esta vacio vamos a lanzar una alerta indicando que deberia esta lleno
  if (textSearch === "") {
    alert("Debe escribir un texto para iniciar la busqueda");
    // que debemos poner para que la funcion termine su ejecucion?
    return;
  }

  // recuerden que solo entra al if si esta vacio si no hara lo siguiente
  //? Nota: Estamos transformando a minuscula ambos textos
  // tanto el de la busqueda como el del array de objetos
  const filtro = autos.filter(
    (auto) =>
      auto.nombre.toLowerCase().includes(textSearch.toLowerCase()) ||
      auto.marca.toLowerCase().includes(textSearch.toLowerCase()) ||
      auto.vendedor.toLowerCase().includes(textSearch.toLowerCase())
  );
  // luego del filtro a quien debemos llamar?
  createCards(filtro);
};