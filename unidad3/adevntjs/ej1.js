arreglo = [3, 1, 2, 3, 4, 2, 5]


let ordenadoSinRepetidos = [... new Set(arreglo)].sort((a,b) => a-b);
console.log(ordenadoSinRepetidos)

