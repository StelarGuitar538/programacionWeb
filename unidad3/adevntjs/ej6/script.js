document.getElementById("iniciar").addEventListener("click", function() {
    let tiempo = parseInt(document.getElementById("input").value.trim());

    if (isNaN(tiempo) || tiempo <= 0) {
        alert("ingresa un tiempo valido");
        return;
    }

    const div = document.getElementById("display");
    div.textContent = tiempo;

    const interval = setInterval(() => {
        tiempo --;
        div.textContent = tiempo;

        if (tiempo <= 0) {
            clearInterval(interval);
            div.textContent = "tiempo terminado";
        }
    }, 1000);
})