document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault()
    const inputs = document.querySelectorAll(".input");
    const spans = document.querySelectorAll(".span");
    inputs.forEach((input, index) => {
        const span = spans[index];
        if(input.value.trim() == "") {
            span.textContent = "rellene el campo"
        } else {
            span.textContent = ""
        }
    })
})