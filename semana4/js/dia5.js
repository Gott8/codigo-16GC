// Una funcion es un bloque de codigo que realiza una accion

// la sintaxis de una function se divide. en 3

// Los mas clasico y antiguo
// function nombreDeLaFuncion() {
    // En este espacio podemos escribir codigo
//     const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];
  
//     for (let alumno of alumnos) {
//       console.log(alumno);
//     }
//   }
  
  // Nota para hacer que una funcion se ejecute debemos llamarla
  // Esta accion que acabamos de hacer se llama ejecutar a la funcions
//   nombreDeLaFuncion();
  
  // Ahora haremos una funcion que retorne una valor
  
  // Teoricamente hay 2 clases de funciones
  // Funciones impuras => Es una funcion que no retorna un valor
  // Funciones puras.  => Es una funcion que retorna valor
  
  // * Las funcion tienen la opcion de usar "return" que es una
  // * parala reserva de JS la cual sirve para devolver un valor
  
//   function cuboDeUnNumero() {
//     return Math.pow(10, 3);
//   }
  
  // recurden que esta es llamar a una funcion
//   const resultado = cuboDeUnNumero();
  
//   console.log("resultado", resultado);
  
  // Una funcionalidad es el poder enviar valores a las funciones
  // Lo que esta dentro del parentesis en una funcion se llaman parametros
  // y podemos enviar n parametros
  //* Los parametros deben estar separados por comas
//   function potenciaDeUnNumero(numero, potencia) {
//     return Math.pow(numero, potencia);
//   }
  
//   const ejemplo1 = potenciaDeUnNumero(4, 3); // 4 al cubo
//   const ejemplo2 = potenciaDeUnNumero(6, 2); // 6 al cuadrado
//   console.log(ejemplo1);
//   console.log(ejemplo2);

  //

//   function sumaDeNumeros(numero1, numero2) {
//    document.write(numero1 + numero2);
//   }
  
 

//  sumaDeNumeros(14131,15445);

// Paso 1 creo una funcion que me retorne el factorial
function calcularFactorial(numero) {
    // 4 = 1 x 2 x 3 x 4 = 24
    const number = Number(numero);
  
    //! Nota el return aparte de retornar un valor da fin a la
    //! ejecucion de la funcion
    if (isNaN(number)) {
      return "Esto no se puede hacer porque no es un numero";
    }
  
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }


  function imprimirFactorial() {
    const inputValor = document.getElementById("input_number").value;
    console.log(inputValor);
  }

  const container = document.querySelector(".container");
  container.innerHTML +=
    "<p>Factortorial de " + inputValor + ": " + resultado + "</p>";
}