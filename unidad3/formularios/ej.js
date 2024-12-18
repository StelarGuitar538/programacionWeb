const nombres = ["Ana", "Pepe", "Pancho"];

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    const nu = document.getElementById("nu").value;
    const nue = document.getElementById("nue");

    const em = document.getElementById("email").value;
    const eme = document.getElementById("eme");

    const pass = document.getElementById("pass").value;
    const passe = document.getElementById("passe");

    const rpass = document.getElementById("rpass").value;
    const rpasse = document.getElementById("rpasse");

    // Limpiar mensajes de error
    nue.textContent = "";
    eme.textContent = "";
    passe.textContent = "";
    rpasse.textContent = "";

    let valid = true;
   
    if (nu.length < 3) {
        nue.textContent = "el nombre tiene que tener minimo 3 caracteres";    
        valid = false;
    } else if (nombres.includes(nu)) {
        nue.textContent = "ingrese otro nombre";
        valid = false;
    }

    if (!em.includes("@")){
        eme.textContent = "ingrese un email valido"
        valid = false;
    }

    if (pass.length < 8) {
        passe.textContent = "minimo 8 caracteres"
        valid = false;
    }

    if (rpass != pass) {
        rpasse.textContent = "las conntrasenas tienen que ser iguales"
        valid = false;
    }

    if(valid) {
        const formData = new FormData(document.getElementById("form"));

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("datos enviados con exito", data);
            alert("datos enviados con exito");
        })
        .catch(error => {
            console.error("error", error);
            alert("error al enviar datos")
        })

    }
})