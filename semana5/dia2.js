const products = [
    {
      name: "Laptop HP",
      price: 1300,
      brand: "HP",
    },
    {
      name: "Laptop Gamer",
      price: 2100,
      brand: "Lenovo",
    },
    {
      name: "Laptop Super Poderosa",
      price: 5300,
      brand: "Alien Ware",
    },
    {
      name: "Laptop/Tablet",
      price: 2400,
      brand: "ASUS",
    },
  ];

  // users.forEach(user)
// movies.forEach(movie)

// products.forEach((product, index) => {});

// * forEach

const productsIterForEach = products.forEach((product) => {
    // Recurden que product es cada elemento de mi array
    // console.log(product.name);
    return product.price - 100;
  });
  
  //* map
  // queremos agregar un nuevo campo al array de objetos
  // ese campo se llamara descuente que sera el precio - 100 soles
  
  // En este caso estamos calculado el campo discount y lo estamos
  // guardando en productsIterMap
  
  // Los valores que esta capturando nuestro map los esta guardando en
  // la varable productsIterMap y esto sera un arreglo de los
  // resultados
  const productsIterMap = products.map((product) => {
    // 1200
    // 2000
    // 5200
    // 2300
    return product.price - 100;
  });
  
  // Resument: Siempre el map retorna un array de elementos
  
  console.log("forEach", productsIterForEach);
  console.log("map", productsIterMap);
  // Cuando decimos que forEach no retorna nada quiere decir que no se
  // puede guardar dentro de una variable