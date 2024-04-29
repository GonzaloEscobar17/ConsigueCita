// Boton No
const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  noBtn.style.setProperty("top", randomY + "%");
  noBtn.style.setProperty("left", randomX + "%");
  noBtn.style.setProperty("transform", `translate(-${randomX}%,-${randomY}%)`);
});

// cuadro de dialogo
const yesBtn = document.querySelector("#yesBtn");
const dialogo = document.getElementById("dialogo");

yesBtn.addEventListener("click", function () {
  dialogo.style.display = "block";
});

const confirmarBtn = document.querySelector("#confirmarBtn");

confirmarBtn.addEventListener("click", function () {
  dialogo.style.display = "none";
});

function cerrarDialogo() {
  dialogo.style.display = "none";
}
