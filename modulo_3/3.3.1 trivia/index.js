const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const typeSelect = document.getElementById("type");
const generateButton = document.getElementById("generate");
const triviaSection = document.querySelector(".trivia-section");
const questionsContainer = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("score");
const scoreValue = document.getElementById("score-value");
const newTriviaButton = document.getElementById("new-trivia");

generateButton.addEventListener("click", generateTrivia);
submitButton.addEventListener("click", calculateScore);
newTriviaButton.addEventListener("click", generateTrivia);

const API_URL = "https://opentdb.com/api.php";

function generateTrivia() {
    // Obtener valores de los select
    const categoryId = categorySelect.value;
    const difficulty = difficultySelect.value;
    const type = typeSelect.value;

    // Realizar una solicitud a la API para obtener las preguntas
    fetch(`${API_URL}?amount=10&category=${categoryId}&difficulty=${difficulty}&type=${type}`)
        .then((response) => response.json())
        .then((data) => {
            displayTrivia(data.results);
        })
        .catch((error) => console.error(error));
}

function displayTrivia(questions) {
    questionsContainer.innerHTML = "";
    let score = 0;

    questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        const questionText = document.createElement("p");
        questionText.innerHTML = `<strong>Pregunta ${index + 1}:</strong> ${question.question}`;
        questionElement.appendChild(questionText);

        const answerList = document.createElement("ul");

        if (question.type === "multiple") {
            const answers = [...question.incorrect_answers, question.correct_answer];
            answers.sort(() => Math.random() - 0.5); // Shuffle answers
            answers.forEach((answer) => {
                const answerItem = document.createElement("li");
                answerItem.innerHTML = `<input type="radio" name="q${index}" value="${answer}">${answer}`;
                answerList.appendChild(answerItem);
            });
        } else if (question.type === "boolean") {
            const trueAnswer = document.createElement("li");
            trueAnswer.innerHTML = `<input type="radio" name="q${index}" value="True">Verdadero`;
            answerList.appendChild(trueAnswer);

            const falseAnswer = document.createElement("li");
            falseAnswer.innerHTML = `<input type="radio" name="q${index}" value="False">Falso`;
            answerList.appendChild(falseAnswer);
        }

        questionElement.appendChild(answerList);
        questionsContainer.appendChild(questionElement);
    });

    submitButton.style.display = "block";
    newTriviaButton.style.display = "block";

    submitButton.addEventListener("click", () => {
        score = calculateScore(questions);
        scoreValue.textContent = score;
        triviaSection.removeChild(submitButton);
    });
}

function calculateScore(questions) {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correct_answer) {
            score += 100;
        }
    });

    return score;
}