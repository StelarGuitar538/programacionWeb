document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let resultado = 0;
    let camposValidos = true;
    const presupuestos = document.querySelectorAll(".pres")
    const spans = document.querySelectorAll(".span");
    
    presupuestos.forEach((pres, index) => {
       const valor = parseFloat(pres.value);
       const span = spans[index];

       if (isNaN(valor) || valor === "") {
        span.textContent = "rellene el campo";
        camposValidos = false;
       } else {
        span.textContent = ""
        resultado += valor
       }
    })
    if (camposValidos) {
        document.getElementById("label").textContent = `Presupuesto total: ${resultado}`;
    }
})