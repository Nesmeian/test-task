const toggleButton = document.querySelector(".toggle-button");
const hiddenText = document.querySelector(".hidden-text");
toggleButton.addEventListener("click", () => {
  const display = hiddenText.style.display;
  hiddenText.style.display = display === "none" ? "block" : "none";
});
