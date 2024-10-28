const toggleButton = document.querySelector(".toggle-button");
const hiddenText = document.querySelector(".hidden-text");
toggleButton.addEventListener("click", () => {
  const isVisible = hiddenText.classList.toggle("show"); // Переключаем класс и сохраняем состояние
  toggleButton.textContent = isVisible ? "Hide Text" : "Show Text"; // Изменяем текст кнопки
});
