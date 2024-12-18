let resultado = 0;
const botones = document.querySelectorAll(".btn");
const carrito = document.querySelector(".carrito");

botones.forEach((boton) => {
    boton.addEventListener("click", function() {
        const carta = boton.closest(".carta");
        const titulo = carta.querySelector(".titulo").textContent;
        const precio = parseInt(carta.querySelector(".precio").textContent);
        const li = document.createElement("li");
        li.textContent = `${titulo} - $${precio}`;
        document.getElementById("ul").appendChild(li);
        resultado += precio;
        const p = document.getElementById("p");
        p.textContent = `Total: $${resultado}`
    })
})

const eliminar = document.createElement("button");
eliminar.textContent = "eliminar";

document.querySelector(".carrito").addEventListener("click", function(){
    const ul = document.getElementById("ul");
    const p = document.getElementById("p");

    if(ul.style.display === "none"){
        ul.style.display = "block";
        p.style.display = "block";
    } else {
        ul.style.display = "none";
        p.style.display = "none";
    }

    
    document.getElementById("h").appendChild(eliminar);
    eliminar.addEventListener("click", function() {
        ul.textContent = "";
        p.textContent = "";
    })
})

document.getElementById("ul").style.display = "none"
document.getElementById("p").style.display = "none"
