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
