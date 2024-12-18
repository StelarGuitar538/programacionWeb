const div = document.createElement("div");
document.querySelector("body").appendChild(div);

function calcular (operacion) {
    return function(event) {
        event.preventDefault();

        const in1 = document.getElementById("in1").value;
        const in2 = document.getElementById("in2").value;

        if (in1 ===  "" && in2 === ""){
            alert("campo vacio");
            return;
        }
        let resultado;
        switch (operacion) {
            case "suma":
                resultado = in1 + in2;
                break;

            case "resta":
                resultado = in1 - in2;
                break;

            case "multiplicacion":
                resultado = in1 * in2;
                break;

            case "division":
                if (in2 !== 0){
                    resultado = in1 / in2;
                }
                break;
        }

        
        div.innerText = `El resultado de la ${operacion} es: ${resultado}`;

    }
    
}

document.getElementById("suma").addEventListener("click", calcular("suma"));
document.getElementById("resta").addEventListener("click", calcular("resta"));
document.getElementById("multiplicacion").addEventListener("click", calcular("multiplicacion"));
document.getElementById("division").addEventListener("click", calcular("division"));