document.addEventListener("DOMContentLoaded", (e) => {
  const questionBox = document.getElementById("questionBox");
  const optionBox = document.getElementById("optionBox");
  let tagNote = document.getElementById("tagNote");
  const app = document.getElementById("app");
  const quizForm = document.getElementById("quizForm");
  let selectedDifficulty = localStorage.getItem("selectedDifficulty");

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
      const getPathName = window.location.pathname;
      if (selectedDifficulty) {
        let getAllQuestions;
        if (getPathName === "/CS101/quiz" || getPathName === "/cos101/quiz") {
          // Added lowercase check and potential alternative
          getAllQuestions = data["cos101"];
        } else if (
          getPathName === "/CSC101/quiz.html" ||
          getPathName === "/CSC101/quiz"
        ) {
          getAllQuestions = data["csc101"];
        } else if (
          getPathName === "/MTH101/quiz.html" ||
          getPathName === "/MTH101/quiz"
        ) {
          getAllQuestions = data["mth101"];
        } else if (
          getPathName === "/PHY101/quiz.html" ||
          getPathName === "/PHY101/quiz"
        ) {
          getAllQuestions = data["phy101"];
        } else if (
          getPathName === "/GST111/quiz.html" ||
          getPathName === "/GST111/quiz"
        ) {
          getAllQuestions = data["gst111"];
        } else if (
          getPathName === "/STA111/quiz.html" ||
          getPathName === "/STA111/quiz"
        ) {
          getAllQuestions = data["sta111"];
        }

        if (selectedDifficulty === "mad-max") {
          loadQuestion = getAllQuestions;
        } else {
          loadQuestion = getAllQuestions.filter(
            (question) => question.difficulty === selectedDifficulty
          );
        }
      } else {
        app.innerHTML = `<p>You are yet to pick a difficulty level kindly go back to the previous page to pick one</p>`;
        console.log("you are yet to pick a difficulty level");
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
            window.location.href = "query.html";
          }
        }
      });
    } catch (error) {
      console.error("could not fetch data:", error);
    }
  }
  fetchJsonData();
});
