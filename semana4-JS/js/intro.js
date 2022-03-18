/* varaibles 
    --------------------------------------------------------
    * var para varables globales, se puede sobreescribir.
    Ej:
    var planet = "Marte";
    var planet = "Jupyter";

    console.log(planet);  // Jupyter

    La variable originalmente declarada como: Marte,
    pero mostrara: Jupyter.
    ---------------------------------------------------
    * let solo se puede declarar una sola vez, fue una
    mejora de la acctualización de JS introducida en ES6.
    Ej:

    let planet = "Marte";
    let planet = "Jupyter";

    console.log(planet); 
    La salida es el siguiente error:     
    Uncaught SyntaxError: Identifier 'planet2' has already been declared

    ------------------------------------------------------
    * const variable de solo lectura, 
    solo se asigna una vez y no puede ser reasignada. 
    Ej:

    const planet = "Marte";
    const planet = "Jupyter"; 

    console.log(planet);
    La salida es el siguiente error:
    Uncaught SyntaxError: Identifier 'name' has already been declared
*/
console.log('******************Variables*****************');
var numero1 = 4;
var numero2 = 6;
var numlet = '4';

console.log("El numero 1 es: " + numero1 + "El numero2 es: " + numero2);

/* Cadenas */
console.log('******************Cadenas*****************')
var cadena1 = 'Ejemplo comillas simples';
var cadena2 = "Ejemplo comillas dobles";
var cadena3 = `Ejemplo comillas ${cadena1} invertidas`;

console.log(cadena1);
console.log(cadena2);
console.log(cadena3);

console.log(cadena1 + "\n" + cadena2 + "\n" + cadena3);

/* Condicionales >, <, =, ==, ===, != */
console.log('\n******************Condicionales*****************\n');

console.log(numero1 > numero2) // False
console.log(numero1 < numero2) // True

// en este primer ejemplo compara el valor de la variable
var ejemploOperador1 = numero1 == numlet; //True

// en este segundo ejemplo compara el tipo de dato 
var ejemploOperador2 = numero1 === numlet; // False

console.log(ejemploOperador1);
console.log(ejemploOperador2);


/* Operadores Logicos 
    Los operadores se utilizan cuando se nececita comparar
    mas de una condicional.

    El operador && (AND) necesita que todos sus valores sean true para que su salida sea true
    El Operador || (OR) necesita que solo uno de sus valores sea true para que la salida sea true
*/
console.log('\n******************Operadores*****************\n');
console.log(true && false); // False
console.log(true || false); // True

/* Concatenación */
console.log('\n******************Concatenacion*****************\n');
console.log('numero: ' + numero1 + ' y ' + 'numero: ' + numero2);
console.log(cadena1 + '\n' + cadena2 + '\n' + cadena3);


/* Arreglos o listas */
console.log('\n******************Arreglos*****************\n');

let lista = [3, 5, 67, 8,89, 34];

console.log(lista);
console.log(lista.length);  // imprime tamaño de la lista
console.log(lista[2]);  // 67

console.log(lista.push(11))  // agrega el num 11 al final
console.log(lista)

// lista de palabras
let listaPalabras = ["Explorer", "Mission Comander", "LaunchX", "Innovaccion"];
console.log(listaPalabras);
console.log(listaPalabras.length);

// Las cadenas string pueden ser tratadas como arreglos
let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

/* Objetos
    Los objetos son estructuras de datos que nos permiten 
    agrupar datos de diferentes tipos
*/
console.log('******************Objetos*****************');
let objeto = {
    nombre: 'explorer lucero',
    email: 'explorer@innovaccion.mx',
    pais: 'Mexico',
    edad: 23,
    lista: ['Abogabot', 'Taqueria', 'Pasteleria', 'Vacunacion'],
    proyectos: {
        titulo: 'halley',
        fecha: '08-03-2022',
    }
};

console.log(objeto.nombre);
console.log(objeto.lista);
console.log(objeto.proyectos);

/* Flujo condicional if, else if, else */
let number11 = 2;
let number22 = 6;

console.log("\n*********************** if / else ***********\n");
if (number11 > number22 && number22 > 5) {
    console.log("El numero 1 es mayor que numero 2");
}
else if(number11 == number22 || number11 < 3){
    console.log("Los numeros son iguales");
}
else {
    console.log("El numero 2 es mayor que numero 1");
}

/* Ciclo condicional */
console.log("\n************** While **************\n");
let numberWhile = 5;
while (numberWhile <= 12) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Aqui ya salio del while " + numberWhile);


/* Ciclo condicional de una iteración minimo */
console.log("\n************** Do While *****************\n");
let numeroDoWhile = 22;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aqui sale de Do While" + numeroDoWhile);

/* Ciclo for con iteración controlada */
console.log("\n**************** For *****************\n")
let numeroFor = 0;
for (numeroFor; numeroFor <= 12; numeroFor = numeroFor + 1) {
    console.log(numeroFor);
}
console.log("Aqui salimos del for " + numeroFor);

/* Opciones para evitar anidar condicionales */
console.log("\n******** Switch ***************\n");
switch (prompt("¿Cómo esta el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("No se como esta el clima");
        break;
}
console.log("Aqui salimos del Switch");