const nombresPreexistenes = ["Ana", "Juan", "Pedro", "Luis", "Maria", "Pepe", "Pancho"];

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre de usuario").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("passwordConfirmation").value;

    document.getElementById("nombre de usuario-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = ""; 
    document.getElementById("passwordConfirmation-error").textContent = "";

    let valid = true;

    if (nombre.length < 3) {
        document.getElementById("nombre de usuario-error").textContent = "El nombre de usuario debe tener al menos 3 caracteres";
        valid = false;
    } else if (nombresPreexistenes.includes(nombre)) {
        document.getElementById("nombre de usuario-error").textContent = "El nombre de usuario ya existe";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("email-error").textContent = "El email no es válido";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("password-error").textContent = "La contraseña debe tener al menos 8 caracteres";
        valid = false;
    }

    if (password !== passwordConfirmation) {
        document.getElementById("passwordConfirmation-error").textContent = "Las contraseñas no coinciden";
        valid = false;
    }
    
    if (valid) {
        const formData = new FormData(document.getElementById("formulario"));

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("datos enviados con exito", data);
            alert("Datos enviados con exito");
        })
        .catch(error => {
            console.error("error", error);
            alert("Error al enviar datos");
        })}
});

