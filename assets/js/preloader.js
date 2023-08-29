// Wait for the content to load
window.addEventListener("load", () => {
  // After 3 seconds, hide the preloader
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none"; // Disable interactions with the preloader
  }, 2000); // 3000 milliseconds = 3 seconds
});
