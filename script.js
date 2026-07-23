let currentQuestion = 0;
let score = 0;
let userAnswers = [];
const questions = [
    {
        question: "Which language is used to create web pages?",
        options: ["HTML", "Python", "Java", "C++"],
        answer: 0
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Program Unit",
            "Control Processing Unit"
        ],
        answer: 0
    },
    {
        question: "Which software is used for presentations?",
        options: ["MS Word", "MS PowerPoint", "Paint", "Notepad"],
        answer: 1
    }
]
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function startQuiz() {
    const name = document.getElementById("username").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");

    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];

    questionElement.innerHTML = (currentQuestion + 1) + ". " + q.question;
    optionsElement.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option");

        btn.onclick = () => {
            userAnswers[currentQuestion] = index;

            if (index === q.answer) {
                score++;
            }

            currentQuestion++;

            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        };

        optionsElement.appendChild(btn);
    });
}

function showResult() {
    quizScreen.classList.add("hide");
    resultScreen.classList.remove("hide");

    scoreElement.innerHTML =
        "Your Score: " + score + " / " + questions.length;
}
