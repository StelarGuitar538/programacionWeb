const pr = document.getElementById("pr");
const btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "boton"
document.querySelector("footer").appendChild(btn);
btn.addEventListener("click", function() {
  pr.innerHTML = "dale carajooo";
})

