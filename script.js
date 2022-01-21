const toggleButton = document.getElementsByClassName("toggle-button")[0];
const listsContainer = document.getElementsByClassName(
  "nav__lists-container"
)[0];

toggleButton.addEventListener("click", () => {
  listsContainer.classList.toggle("active");
});
