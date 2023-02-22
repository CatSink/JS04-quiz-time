
let currentQuestionIndex = 0;
  
const quizContainer = document.getElementById("quiz");
const startButton = document.getElementById("start-btn");
const questionsContainer = document.getElementById("questions");
const answersContainer= document.getElementById("answer-buttons")
//const choices = document.getElementsById("btn")
/*have tried several versions to dynamically create new buttons 
and display choices without sucess. Also inputing choices.text does not work, 
first choice apears with "undefined" or "object" while remaining 
buttons are unchanged Changing var/const/let does nothing, 
changing value does nothing. */

const questions = 
[
    {
    question: "What primative data type is true or false?",
     choices: [ "String", "Boolean",  "Number", "Undefined" ],
      answer: "1"
},
{
    question: "A type of loop that relies on a specific condition to run?",
     choices: ["For","While", "Reverse","Switch"],
      answer: "1"
},
{
    question:".sort() is best decribed as which of the following?",
     choices: ["Function","Method","Parameter", "Variable"],
      answer: "1"
},
{
    question: "A group of characers surrounded by single or double quotes.",
    choices: ["numbers","symbols","arrays","string"],
    answer: "3"
},
{
    question:"Who created JavaScript?",
     choices: ["Bill Gates","Mitchell Baker", "James Gosling","Brendan Eich"],
      answer: "3"
 }
];
//choices button issues; failing to define connection between btn class and choices array.
//forloop
for (let i = 0; i < questions[currentQuestionIndex].choices; i++) {
 const button = document.createElement("button");
button.classList.add("button-btn");
button.innerText = questions[currentQuestionIndex].choices[i];
console.log(button)

answersContainer.appendChild(button);
}
console.log(questions[currentQuestionIndex])
startButton.addEventListener('click', startQuiz);
//signals display of first question

function startQuiz() {
 startButton.classList.add("hide");
 quizContainer.classList.remove("hide");
 currentQuestionIndex = 0;
 questionsContainer.innerText = questions[currentQuestionIndex].question;
 button.innerText = questions[currentQuestionIndex].choices;
 questionsContainer.classList.remove("hide");
}
 // established length of questions array, shows 5 in console
// console.log(questions.length);
// console.log(questions[0]);
 //calls first item in questions Array in console
//need to update HTML to display questions Array
//need to properly define choices array
//add countdown display to HTML
//create countdown function at start btn click
//create statement for correct answers and countdown
// time/score deducation for false answers
//create html container for user initial and high score storage
//high score button click prompt for user to enter initials and high score
















    
    