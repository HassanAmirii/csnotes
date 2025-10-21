document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector(".start-quiz");
  let selectedDifficulty = null;
  const difficultyButtonContainer =
    document.getElementById("difficulty-buttons");

  difficultyButtonContainer.addEventListener("click", (e) => {
    targetElement = e.target.closest("[data-difficulty]");
    if (targetElement) {
      selectedDifficulty = targetElement.dataset.difficulty;
      console.log(selectedDifficulty);
    } else {
      console.log("error with target element ");
    }
  });

  submitButton.addEventListener("click", () => {
    if (selectedDifficulty) {
      localStorage.setItem("selectedDifficulty", selectedDifficulty);
      window.location.href = "quiz.html";
    } else {
      console.log("select a difficulty level first ");
    }
  });
});
