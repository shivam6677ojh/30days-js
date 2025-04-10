const questions = [
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Google", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Oracle", correct: false }
        ]
    },
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        answers: [
            { text: "var myVar", correct: false },
            { text: "let myVar", correct: false },
            { text: "const myVar", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            { text: "Number", correct: false },
            { text: "String", correct: false },
            { text: "Boolean", correct: false },
            { text: "Float", correct: true }
        ]
    },
    {
        question: "What will 'typeof null' return in JavaScript?",
        answers: [
            { text: "'object'", correct: true },
            { text: "'null'", correct: false },
            { text: "'undefined'", correct: false },
            { text: "'number'", correct: false }
        ]
    },
    {
        question: "Which method is used to convert JSON data to a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.toObject()", correct: false }
        ]
    }
];

const questionEl = document.getElementById("question");
const ansBtns = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

function startQuiz() {
    currentIndex = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentIndex];
    questionEl.innerText = `${currentIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = "true";
        } else {
            button.dataset.correct = "false";
        }
        button.addEventListener("click", selectAnswer);
        ansBtns.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (ansBtns.firstChild) {
        ansBtns.removeChild(ansBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionEl.innerText = `🎉 You scored ${score} out of ${questions.length}`;
    nextBtn.innerText = "Play Again";
    nextBtn.style.display = "block";
}

function handleNext() {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length) {
        handleNext();
    } else {
        startQuiz();
    }
});

startQuiz();
