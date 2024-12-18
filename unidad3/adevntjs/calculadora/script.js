document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll(".input");
    const spans = document.querySelectorAll(".span");
    const span = document.getElementById("span");
    const operacion = document.getElementById("operacion").value;
    const reiniciar = document.getElementById("reiniciar");
    const historial = document.getElementById("historial");
    const valores = [];
    let resultado = 0;
    let bandera = true;

    inputs.forEach((input, index) => {
        const span = spans[index];

        if(isNaN(input.value) || input.value.trim() === "") {
            span.textContent = "rellene el campo"
            bandera = false;
        } else {
            span.textContent = "";
            valores.push(parseFloat(input.value.trim()));
        }
    });
    if(!bandera) {
        return;
    }

    const v1 = valores[0];
    const v2 = valores[1];

    if(operacion === "suma") {
        resultado = v1 + v2;
    } else if(operacion === "resta") {
        resultado = v1 - v2;
    } else if(operacion === "multiplicacion") {
        resultado = v1 * v2;
    } else if (operacion === "division") {
        if (v2 === 0) {
            alert("no se puede dividir por 0");
        } else {
            resultado = v1 / v2;
        }
    }

    span.textContent = `resultado: ${resultado}`;

    reiniciar.addEventListener("click", function() {
        inputs.forEach((input) => {
            input.value = "";
        })
        spans.forEach((span) => {
            span.textContent = "";
        })
        span.textContent = "";
    })
   
    const li = document.createElement("li");
    li.textContent = `${v1} ${operacion} ${v2} = ${resultado}`;
    historial.appendChild(li);
})