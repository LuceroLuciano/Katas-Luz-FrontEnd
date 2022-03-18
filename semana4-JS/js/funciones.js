/* *********************Funciones************** */
/*  Función con un parametro
    Define una funcion y la Asigna a una variable */
const cuadrado = function(x) {
    return x * x;
}

let numero = 4;
console.log(cuadrado(numero));


/* función sin argumentos */
const ruido = function() {
    console.log("Kataplum!!!");
}

ruido();

/* Funcón con dos argumentos */
const exponencial = function(base, exponente){
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(5, 3));

/* Funciones de flecha */
const restar = (a, b) => {
    return a - b;
}

// llama la función flecha de restar
console.log(restar(40, 8));

/* Declara una función sin parametros */
function saludar(quien) {
    console.log("Hola " + quien);
    return;
}

saludar("Explorer");
console.log("Bye ");

/* Declarar una funcion con un parametro */
function miNombre(nombre){
    return `Tu nombre es: ${nombre}`
}

console.log(miNombre('Lucero'));

/* *********************Exepciones************** */
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda")
        return "I";
    if (result.toLocaleLowerCase() == "derecha")
        return "D";
    throw new Error("Direccion Invalida " + result);
}

function mirar() {
    if (preguntaDireccion("A que lado?") == "I") {
        return "Una casa";
    } else {
        return "Dos osos hambrientos";
    }
}

try {
    console.log("Mira a ", mirar());
} catch(error) {
    console.log("Hubo un error: " + error);
}


//Asincrono
setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
      2000
    )
  )

async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('hola'))
  //         .catch((err) => console.error(err))
  //     })
  //     .catch((err) => console.error(err))

  await promesa();
  console.log('Aquí termina la primer promesa');
  await promesa();
  console.log('Aquí termina la segunda promesa');
}

main();