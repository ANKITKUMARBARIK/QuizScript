document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('#start-btn')
    const nextBtn = document.querySelector('#next-btn')
    const restartBtn = document.querySelector('#restart-btn')
    const questionContainer = document.querySelector('#question-container')
    const questionText = document.querySelector('#question-text')
    const choicesList = document.querySelector('#choices-list')
    const resultContainer = document.querySelector('#result-container')
    const scoreDisplay = document.querySelector('#score')

    const questions = [
        {
            question: "Which keyword is used to declare a constant in JavaScript?",
            choices: ["var", "let", "const", "static"],
            answer: "const"
        },
        {
            question: "What does `NaN` stand for in JavaScript?",
            choices: ["No any Number", "Not a Number", "Name as Number", "Null and Nothing"],
            answer: "Not a Number"
        },
        {
            question: "Which method is used to add an element at the end of an array?",
            choices: ["push()", "pop()", "shift()", "unshift()"],
            answer: "push()"
        }
    ];

    let currentQuestionIndex = 0
    let score = 0

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
            showQuestion()
        } else {
            showResult()
        }
    })

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0
        score = 0
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function startQuiz() {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion() {
        nextBtn.classList.add('hidden')
        questionText.textContent = questions[currentQuestionIndex].question
        choicesList.innerHTML = "" // clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer
        if (choice === correctAnswer) {
            score++
        }
        nextBtn.classList.remove('hidden')
    }

    function showResult() {
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }
})