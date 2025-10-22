document.addEventListener("DOMContentLoaded", (e) => {
  const questionBox = document.getElementById("questionBox");
  const optionBox = document.getElementById("optionBox");
  let tagNote = document.getElementById("tagNote");
  const app = document.getElementById("app");
  const quizForm = document.getElementById("quizForm");
  let questionIndex = 0;
  let quizScore = 0;
  let loadQuestion;
  async function fetchJsonData() {
    try {
      const response = await fetch("/data/questions.json");
      if (!response.ok) {
        throw new Error(`HTTp error ${response.status}`);
      }

      const data = await response.json();
      const getLevelFromLocalStorage = localStorage.getItem("level");
      const getPathName = window.location.pathname;
      if (getPathName === "/quiz.html") {
        if (getLevelFromLocalStorage === "mad-max") {
          loadQuestion = data["mth101"];
        } else {
          loadQuestion = data["mth101"].filter(
            (question) => question.difficulty === getLevelFromLocalStorage
          );
        }
      } else {
        tagNote.innerText = "";
        app.innerHTML = `<p>It's not you; It's us :(</p><p>Unable to find quiz question for this page </p> <p>Try again later!</p>`;
      }

      function renderQuestion() {
        // update questions
        const getQUestionFromJson = loadQuestion[questionIndex]["question"];
        questionBox.innerHTML = `Q${questionIndex + 1}: ${getQUestionFromJson}`;

        // update options
        const getOptionsFromJson = loadQuestion[questionIndex]["options"];
        const refineOptions = getOptionsFromJson
          .map(function (optionItem, index) {
            return `<button class="questionAnswer" data-index="${index}">${optionItem}</button>`;
          })
          .join("");

        optionBox.innerHTML = refineOptions;

        // get answer
        const getAnswerFromJsonIndex = loadQuestion[questionIndex]["answer"];

        const allQuestionsButton = document.querySelectorAll(".questionAnswer");
        // attach click handlers to each option button
        allQuestionsButton.forEach((button) => {
          button.addEventListener("click", (e) => {
            e.preventDefault();
            const clickedButton = e.target;
            const selectedIndex = clickedButton.dataset.index;

            if (selectedIndex == getAnswerFromJsonIndex) {
              quizScore++;
            }
          });
        });
      }
      renderQuestion();
      // submit functionality
      quizForm.addEventListener("submit", (e) => {
        e.preventDefault();
        app.innerHTML = `<p>you are finished</p><p>you got ${quizScore}/ ${loadQuestion.length}</p>`;
      });

      quizForm.addEventListener("click", (event) => {
        const targetElement = event.target.closest("[data-action]");

        // If such an element is found...
        if (targetElement) {
          const action = targetElement.dataset.action;

          if (action === "prevButton") {
            if (questionIndex > 0) {
              questionIndex--;
              renderQuestion();
            }
          } else if (action === "nextButton") {
            if (questionIndex < loadQuestion.length) {
              questionIndex++;
              renderQuestion();
            }
          } else if (action === "stopButton") {
            window.location.reload();
          }
        }
      });
    } catch (error) {
      console.error("could not fetch data:", error);
    }
  }
  fetchJsonData();
});
