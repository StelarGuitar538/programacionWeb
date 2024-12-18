document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    const inp = document.getElementById("input").value;

    if (inp.trim() === ""){
        alert("ingrese una tarea");
        return;
    }

    const li = document.createElement("li");
    li.id = "li";
    li.textContent = inp;
    document.getElementById("ul").appendChild(li)
    document.getElementById("input").value = "";

    const btn = document.createElement("button");
    btn.id = "eliminar";
    btn.textContent = "eliminar";
    btn.addEventListener("click", function() {
        li.remove();
    })
    li.appendChild(btn);

    const ter = document.createElement("button");
    ter.id = "ter";
    ter.textContent = "terminada";
    ter.addEventListener("click", function(){
        if (li.style.color === "red") {
            li.style.color = "";
        } else {
            li.style.color = "red";
        }
    })
    li.appendChild(ter);

    li.addEventListener("dblclick", function(){
        const editar = document.createElement("input");
        editar.type = "text";
        editar.value = li.firstChild.textContent;
        editar.id = "editar";
        li.textContent = "";
        li.appendChild(editar);

        editar.addEventListener("blur", saveEdit);
        editar.addEventListener("keydown", function(event){
            if(event.key === "Enter") {
                saveEdit();
            }
        });

        function saveEdit() {
            if(editar.value.trim() !== ""){
                li.textContent = editar.value;
                li.appendChild(btn);
                li.appendChild(ter);
            } else {
                li.remove();
            }
        }
        editar.focus();
    })
})