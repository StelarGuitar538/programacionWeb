let jugadorActual = "X";

const table = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

document.getElementById("table").addEventListener("click", function(event) {
    const target = event.target;

    if (target.tagName === "TD" && jugadorActual === "X") {
        const row = target.parentNode.rowIndex;
        const column = target.cellIndex;

        if (table[row][column] === "-") {
            table[row][column] = jugadorActual;
            target.textContent = jugadorActual;

            if (checkWinner()) {
                alert("El jugador " + jugadorActual + " ha ganado");
                resetTable();
            } else if (tablaLLena()) {
                alert("La partida ha terminado");
                resetTable();
            } else {
                jugadorActual = "O"; 
                cpuMove();
            }
        }
    }
});

function cpuMove() {
    let celdasVacias = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (table[i][j] === "-") {
                celdasVacias.push([i, j]);
            }
        }
    }

    if (celdasVacias.length > 0) {
        const randomIndex = Math.floor(Math.random() * celdasVacias.length);
        const [row, column] = celdasVacias[randomIndex];

        movimiento(row, column, "O");

        if (checkWinner()) {
            alert("La CPU (O) ha ganado");
            resetTable();
        } else if (tablaLLena()) {
            alert("La partida ha terminado");
            resetTable();
        } else {
            jugadorActual = "X"; 
        }
    }
}

function movimiento(row, column, jugador) {
    table[row][column] = jugador;
    const cell = document.getElementById("table").rows[row].cells[column];
    cell.textContent = jugador;
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (table[i][0] === jugadorActual && table[i][1] === jugadorActual && table[i][2] === jugadorActual) {
            return true;
        }
        if (table[0][i] === jugadorActual && table[1][i] === jugadorActual && table[2][i] === jugadorActual) {
            return true;
        }
    }

    if (table[0][0] === jugadorActual && table[1][1] === jugadorActual && table[2][2] === jugadorActual) {
        return true;
    }
    if (table[0][2] === jugadorActual && table[1][1] === jugadorActual && table[2][0] === jugadorActual) {
        return true;
    }

    return false;
}

function tablaLLena() {
    return table.flat().every(celda => celda !== "-");
}

function resetTable() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            table[i][j] = "-";
        }
    }

    const celdas = document.querySelectorAll("td");
    celdas.forEach(celda => celda.textContent = "-");
    jugadorActual = "X"; 
}
