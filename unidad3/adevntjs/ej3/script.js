const modal = document.getElementById("modal");
const img = document.getElementById("im");
const btn = document.getElementById("close");

function openModal(im) {
    modal.style.display = "block";
    img.src = im;
}

btn.addEventListener("click", function() {
    modal.style.display = "none";
})

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})