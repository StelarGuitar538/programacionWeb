const texto = document.querySelectorAll(".texto");

texto.forEach((textos) => {
    textos.addEventListener("click", function() {
        textos.style.color = "blue";
    })
    textos.addEventListener("mouseover", function() {
        textos.style.color = "red";
    })
})