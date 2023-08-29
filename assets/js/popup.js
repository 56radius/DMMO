const openLink = document.getElementById("open-popup");
const closeButton = document.getElementById("close-popup");
const popup = document.getElementById("popup");

openLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  popup.style.display = "block";
});

closeButton.addEventListener("click", function () {
  popup.style.display = "none";
});
