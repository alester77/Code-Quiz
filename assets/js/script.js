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

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // answerButtons.innerHTML = ""; //clear answer buttons before adding new

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    console.log(answer.text);
    button.innerHTML = "hello" + answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
  });
}

startQuiz();
