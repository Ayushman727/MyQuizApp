const quizQuestions = [
  {
    question: "Who developed Python Programming Language?",
    options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"],
    correctAnswer: "Guido van Rossum"
  },
  {
    question: "Which of the following is the correct extension of the Python file?",
    options: [".python", ".pl", ".p", ".py"],
    correctAnswer: ".py"
  },
  {
    question: "Which keyword is used for function in Python language?",
    options: ["Function", "def", "Fun", "Define"],
    correctAnswer: "def"
  },
  {
    question: "What does pip stand for python?",
    options: ["Pip Installs Python", "Pip Installs Packages", "Preferred Installer Program", "All of the mentioned"],
    correctAnswer: "Preferred Installer Program"
  },
  {
    question: "What is the smallest header in HTML by default?",
    options: ["h1", "h2", "h6", "h4"],
    correctAnswer: "h6"
  },

];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 45;
let timerInterval;
function startQuiz() {
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  questionText.innerHTML = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);
    button.addEventListener("click", function () {
      checkAnswer(option);
    });
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}
function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}
function endQuiz() {
  clearInterval(timerInterval);
  const scorePercentage = (score / quizQuestions.length) * 100;
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
}
document.getElementById("start-button").addEventListener("click", startQuiz);