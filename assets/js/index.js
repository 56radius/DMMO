const welcomeScreen = document.querySelector(".welcome-screen");
const homeScreen = document.querySelector(".home-screen");
const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
  welcomeScreen.classList.add("show");
  setTimeout(() => {
    welcomeScreen.style.display = "none";
    homeScreen.classList.add("show");
  }, 1000); // Wait for the animation to finish before showing the home screen
});
