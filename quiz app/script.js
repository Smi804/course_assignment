


const quizData = [
  {
    question: "1. What is HTML?",
    a: "HTML describes the structure of a webpage",
    b: "HTML is the standard markup language mainly used to create web pages",
    c: "HTML consists of a set of elements that helps the browser how to view the content",
    d: "All of the mentioned",
    correct: "d"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Which of the following is used to read an HTML page and render it?",
    a: " Web server",
    b: "Web network",
    c: " Web browser",
    d: "Web matrix",
    correct: "c"
  },
  {
    question: "HTML stands for __________",
    a: "HyperText Markup Language",
    b: "HyperText Machine Language",
    c: "HyperText Marking Language",
    d: "HighText Marking Language",
    correct: "a"
  },
  {
    question: "What is the correct syntax of doctype in HTML5",
    a: "</doctype html>",
    b: "<doctype html>",
    c: "<doctype html!>",
    d: "<!doctype html>",
    correct: "d"
  }
]
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElements) => {
    if (answerElements.checked) answer = answerElements.id; 
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", function(){
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;currentQuiz++
    if(currentQuiz<quizData.length) loadQuiz();
    else{
   alert("you got"+score+"/"+quizData.length); 
      quiz.innerHTML=
      '<button onclick="history.go(0);">play again</button';
    } 
  }
});