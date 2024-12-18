document.getElementById("form").addEventListener("submit",  function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll(".pres");
    const spans = document.querySelectorAll("span");
    const li = document.getElementById("label");
    let resultado = 0;

    inputs.forEach((input, index) => {
        const span = spans[index];
        if(input.value === "") {
            span.textContent = "rellene el campo";
        } else {
            span.textContent = "";
        }
        resultado += parseInt(input.value);
    });
    li.textContent = `presupuesto semanal ${resultado}`;
    if (resultado < 0) {
        li.style.color = "red";
    } else {
        li.style.color = "green";
    }
})