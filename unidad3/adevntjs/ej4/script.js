document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const n = document.getElementById("n").value.trim();
    const e = document.getElementById("e").value.trim();
    const p = document.getElementById("p").value.trim();

    const ne = document.getElementById("ne");
    const ce = document.getElementById("ce");
    const pe = document.getElementById("pe");

    ne.innerHTML = "";
    ce.innerHTML = "";
    pe.innerHTML = "";

    let valid = true;

    if(n.length < 3) {
        ne.textContent = "el nombre debe tener mas de 3 caracteres";
        valid = false
    }

    const email =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.test(e)) {
        ce.textContent = "ingrese email valido";
        valid = false
    }

    if(p.length < 8) {
        pe.textContent = "la contrasena  debe tener minimo 8 caracteres";
        valid = false
    }

    if (valid) {
        alert("formulario enviado con exito");
    }
})