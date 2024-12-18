const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", function() {
        const fila = boton.closest("tr");
        fila.remove();
    })
})