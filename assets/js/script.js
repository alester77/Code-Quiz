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

var CurrentQuestionIndex = 0; //keep track of current question
var score = 0; //keep track of score

var currentQuestionIndex = 0;
var timer;
var timeRemaining = 60;

// function to start timer
function Countdown (){
  var timeRemaining = 60;
  var timer = setInterval(function (){
    timeRemaining--;
    timerDisplay.textContent = timeRemaining;

    if(timeRemaining === 0){
      clearInterval(timer);
      timerDisplay.textContent = "0";
      displayScore();
    }
  }, 1000)
}

function displayQuestion(){
  var currentQuestion = quizData[currentQuestionIndex];
  questionArea.textContent = currentQuestion.question; //display question
  optionsArea.innerHTML = ""; //clear option area

  // display options
  for (var i = 0; i < currentQuestion.options.length; i++) {
    var optionLabel = document.createElement("label");
    var optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = "option";
    optionInput.value = currentQuestion.options[i];
    optionLabel.appendChild(optionInput);
    optionLabel.append(" " +currentQuestion.options[i]);
    optionsArea.appendChild(optionLabel);
  }
}
// check the selected answer
function checkAnswer(){
  var selectedOption = document.querySelector('input[name="option"]:checked');

}

// function to display quiz once score is done
function displayScore (){

}

Countdown();

// makes start quiz begin quiz
startButton.addEventListener("click", function(){
  displayQuestion();
});

