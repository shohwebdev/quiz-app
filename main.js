const quizData = [
    {
        question: "1. Amir Temur qachon tug'ilgan?",
        a : 1336,
        b : 1337,
        c : 1339,
        d : 1236,
        correct : "a",
    },
    {
        question: "1. Alisher Navoiy qachon tug'ilgan?",
        a : 1445,
        b : 1441,
        c : 1448,
        d : 1541,
        correct : "b",
    },
    {
        question: "1. Zahiriddin Muhammad Bobur qachon tug'ilgan?",
        a : 1456,
        b : 1568,
        c : 1483,
        d : 1365,
        correct : "c",
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
}
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if(answerElement.checked) answer = answerElement.id
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
}
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct)
        score++;
        currentQuiz++;
        if(currentQuiz < quizData.length) loadQuiz();
        else{
            quiz.innerHTML = `<h2> Sizning to'g'ri javoblaringiz ${score}/ ${quizData.length} ta</h2>
            <button onclick="history.go(0)">Qaytadan boshlash</button>
            `
        }
    }
})