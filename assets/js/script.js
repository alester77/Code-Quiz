// Quiz questions and answers
const quizData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<scripting>", "<js>", "<script>"],
    correctAnswer: "<script>"
  },
  {
    question: "How do I add a comment inside of JS?",
    options: ["Just type.", "//This is a comment", "`This is a comment", "!This is a comment"],
    correctAnswer: "//This is a comment"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["x", "=", "-", "*"],
    correctAnswer: "="
  },
];

// Variables
var startButton = document.getElementById("startButton");
var questionArea = document.getElementById("questionArea");
var optionsArea = document.getElementById("optionsArea");
var timerDisplay = document.getElementById("timerDisplay");
var scoreForm = document.getElementById("scoreForm");
var initialsInput = document.getElementById("initials");

var currentQuestionIndex = 0;
var timer;
var timeRemaining = 60;

// Function to start the quiz
function startQuiz() {
  startButton.style.display = "none";
  timer = setInterval(updateTimer, 1000);
  showQuestion();
}



