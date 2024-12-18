function saludar() {
    const saludo = document.getElementById("saludo");
    saludo.innerHTML = "Hola"
}

setTimeout(function color() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    header.style.backgroundColor = "red";
    footer.style.backgroundColor = "green";
},5000)


document.getElementById("getDataBtn").addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const post = data.slice(0,10);

        let ul = document.querySelector("#postList");
        if(!ul) {
            ul = document.createElement("ul");
            ul.id = "postList";
            document.querySelector("main").appendChild(ul);
        }
        ul.innerHTML = ''

        post.forEach(post => {
            const li = document.createElement("li");
            li.textContent =  `Post ${post.id} ${post.title}`;
            document.querySelector("ul").appendChild(li);
        })
    })
    .catch(error => console.error("error", error))
})