function suma(a, b) {
    return a+b;
}

let sua = (a, b) =>{
    return a+b;
}

let sum = (a,b) => a+b;

let arreglo =  [1, 2, 3, 4, 5, 6, 11, 23, 1, 989, 0, 1, 111, 645, 50, 45];

let menor = arreglo.reduce((min, num) => (num <= min ? num : min), arreglo[0]);
console.log(menor);

let todos = arreglo.reduce((acum, num) => (acum += num), arreglo[0]);
console.log(todos)

let doble = arreglo.map(num => num *2);
console.log(doble);

let m = arreglo.filter(num => num <= 10);
console.log(m);

let indice = arreglo.findIndex(num => num >=10);
console.log(indice);


class Automovil{
    constructor(r, p, c, v){
        this.ruedas = r;
        this.puertas = p;
        this.color = c;
        this.velocidad = v;
    }
    aumentarVelocidad(){
        this.velocidad += 20;
    }
}