//funcion normal

function suma(a, b) {
    return a + b;
}
console.log(suma(1, 2));

//funcion anónima

const suma = function (a, b) {
    return a + b;
}
console.log(suma(1, 2));

//arrow function con retorno implicito

const suma = (a, b) => a + b;
console.log(suma(1, 2));

//arrow function 

const suma = (a, b) => {
    return a + b;
}
console.log(suma(1, 2));

//metodo abreviado en objetos

const calc = {
    suma(a, b) {
        return a + b;
    }
}

calc.suma(1, 2);

//funcion recursiva

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
