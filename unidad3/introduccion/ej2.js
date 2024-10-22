//Hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se "mueven" al principio del código, aunque parezca que están en una parte más abajo. Este proceso es realizado automáticamente por JavaScript, antes de que se ejecute el código.

//ejemplo de hoisting de una función

funcion1();

function funcion1() {
    console.log("hola");
}
//son completamente hoisted por lo cual va a imprimir hola

//ejemplo de hoisting de una variable

console.log(variable1);

var variable1 = "hola";

// lo que hace el programa es solo declararar la variable variable1, pero no inicializarla, por lo cual va a imprimir undefined