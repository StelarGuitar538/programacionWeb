array = ['midu', 'madeval', 'educalvolpz'];

function create(array) {
    let long = array.reduce((max, nombre) => Math.max(max, nombre.length), 0);
    let ancho = long + 2;

    let pingo = "*".repeat(ancho +2);

    let lineas = array.map(nombre => `* ${nombre.padEnd(long, ' ')} *`);

    const cuadro = [pingo, ...lineas, pingo].join('\n');
    return cuadro;
}

console.log(create(array));