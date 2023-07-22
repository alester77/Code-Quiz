// Quiz questions and answers
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
    ],
  },
  {
    question: "How do I add a comment inside of JS?",
    answers: [
      { text: "Just type.", correct: false },
      { text: "//This is a comment", correct: true },
      { text: "`This is a comment", correct: false },
      { text: "!This is a comment", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "x", correct: false },
      { text: "=", correct: true },
      { text: "-", correct: false },
      { text: "*", correct: false },
    ],
    correctAnswer: "=",
  },
];

var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var quizContainer = document.querySelector("#quiz-container");
var startButton = document.getElementById("start-btn");

var initialsInput = document.getElementById("initials-input");
var initialsTextBox = document.getElementById("initials-text");
var submitInitialsButton = document.getElementById("submit-initials");

var timerElement = document.getElementById("timer");
var timerContainer = document.getElementById("time-container");
var timeLeft = 60;

var currentQuestionIndex = 0;
var score = 0;
var userScores = [];

function displayHighScores() {
  if (document.title === "High Scores") {
    // Retrieve
    var userScores = JSON.parse(localStorage.getItem("userScores"));

    // Sort high scores
    userScores.sort((a, b) => b.score - a.score);

    var highScoresList = document.getElementById("high-scores-list");

    // Display the high scores
    userScores.forEach((scoreData) => {
      var listItem = document.createElement("li");
      listItem.textContent = `${scoreData.initials} - ${scoreData.score}`;
      highScoresList.appendChild(listItem);
    });
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", displayHighScores);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  quizContainer.style.display = "block";
  startButton.style.display = "none";
  timeLeft = 60; // Reset the time when the quiz starts
  timerElement.innerText = "Timer: " + timeLeft + "s";
  startTimer(); // Start the timer
}

function startTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.innerText = "Timer: " + timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

function showQuestion() {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  var questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    console.log(answer.text);
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// remove previous answer blocks
function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    console.log(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  var selectedBtn = e.target;
  var isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    timeLeft -= 20;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; //makes it so you can't click anymore buttons after one is clicked
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  timerContainer.style.display = "none";
  questionElement.innerText = `Your score: ${score}`;
  questionElement.classList.add("high-score"); //add style

  // display input box and button
  initialsInput.style.display = "block";
  initialsTextBox.value = "";

  submitInitialsButton.addEventListener("click", saveUserScore);

  nextButton.innerText = "Play again?";
  nextButton.style.display = "block";
}

function saveUserScore() {
  var initials = initialsTextBox.value.trim();

  if (initials === "") {
    alert("Please enter your initials.");
    return;
  }

  var userScore = {
    initials: initials,
    score: score,
  };

  var savedUserScores = JSON.parse(localStorage.getItem("userScores"));

  if (savedUserScores && Array.isArray(savedUserScores)) {
    savedUserScores.push(userScore);
  } else {
    savedUserScores = [userScore];
  }

  // Save the userScores array in Local Storage
  localStorage.setItem("userScores", JSON.stringify(savedUserScores));

  // Hide the initials input box and button
  initialsInput.style.display = "none";

  nextButton.innerText = "Play again?";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startButton.addEventListener("click", startQuiz);
