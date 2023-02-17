
  
const quizContainer = document.getElementById("quiz");
const startButton = document.getElementById("start-btn");

startButton.addEventListener('click', startQuiz);

var myQuestions = [
    {
        question: "What primative data type is true or false?",
        answers: {
            a: "String",
            b: "Boolean",
            c: "Number",
            d: "Undefined"
     },
     correctAnswer: "b"
     },
     {
        question: "A type of loop that relies on a specific condition to run?",
        answers: {
            a: "For",
            b: "While",
            c: "Reverse",
            d: "Switch"
     },
     correctAnswer: "b"
    },
    {
        question:".sort() is best decribed as which of the following?",
        answers: {
            a: "Function",
            b: "Method",
            c: "Parameter",
            d: "Variable"
        },
        correctAnswer: "b"
    },
    {
        question: "A group of characers surrounded by single or double quotes.",
        answers: {
            a: "numbers",
            b: "symbols",
            c: "arrays",
            d: "string"
         },
        correctAnswer: "d"
    },
    {
        question: "Which of the folowing best describes an expression that allows different blocks of code to execute depending on results?",
        answers: {
            a: "if statement",
            b: "conditional statement",
            c: "then statement",
            d: "switch statement"
        },
        correctAnswer: "d"
    }
];

function startQuiz() {
 console.log(startQuiz);

}


  











    
    