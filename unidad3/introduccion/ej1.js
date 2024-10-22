function testVar() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log("dentro del bloque con var: " + x);
    }
    console.log("fuera del bloque con var: " + x);
}

//al redefinirse x, cambia su valor dentro y fuera del bloque, que puede o no ocasionar problemas

function testLet() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log("dentro del bloque con let: " + x);
    }
    console.log("fuera del bloque con let: " + x);
}

//se redefine el valor dentro del if, pero no fuera del bloque

function testConst() {
    const x = 1;
    if (true) {
        const x = 2;
        console.log("dentro del bloque con const: " + x);
    }
    console.log("fuera del bloque con const: " + x);
}

testVar();
testLet();
testConst();
