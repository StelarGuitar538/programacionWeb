document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    const spans = document.querySelectorAll("span");
    const op = document.getElementById("operacion").value;
    const res = document.getElementById("span");
    const reiniciar = document.getElementById("reiniciar");
    const historial = document.getElementById("historial");
    let valores =[];
    let resultado = 0;
    let bandera = true;

    inputs.forEach((input, index) =>  {
        const span = spans[index];

        if (input.value === "") {
            span.textContent = "rellene el campo";
            bandera = false;
        } else {
            span.textContent = "";
            valores.push(input.value);
        }
    })

    if(bandera) {
        const v1 = parseFloat(valores[0]);
        const v2 = parseFloat(valores[1]);

        switch(op) {
            case "suma":
                resultado = v1 + v2;
                break;
            case "resta":
                resultado = v1 - v2;
                break;
            case "multiplicacion":
                resultado = v1 * v2;
            case "divison":
                if(v2 === 0) {
                    alert("no se puede dividir por 0");
                } else {
                    resultado = v1 / v2;
                }
        }
        res.textContent = `resultado ${v1} ${op} ${v2} = ${resultado}`;
        const li = document.createElement("li");
        li.textContent =`resultado ${v1} ${op} ${v2} = ${resultado}`;
        historial.appendChild(li);

        reiniciar.addEventListener("click", function() {
            inputs.forEach((input) => {
                input.value = "";
            });
            spans.forEach((span) => {
                span.textContent = "";
            })
        })



    }

})