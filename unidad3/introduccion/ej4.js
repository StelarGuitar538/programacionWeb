const array = [1, 2, 3, 4, 5, 6, 11, 23, 1, 989, 0, 1, 111, 645, 50, 45];

const menor = array.reduce((min, num) => (num < min ? num : min), array[0]);
console.log(menor);

const suma = array.reduce((acum, num) => acum + num, 0);
console.log(suma);

const doble = array.map(num => num * 2);
console.log(doble);

const diez = array.filter(num => num >= 10 );
console.log(diez);

const encontrado = array.findIndex(num => num > 10);
console.log(encontrado);