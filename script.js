let startSection = document.querySelector('.start-wrapper')
let quizSection = document.querySelector('.quiz-wrapper')
let startBtn = document.querySelector(".start-button")
let questionHeading = document.querySelector(".question-heading")
let buttons = document.querySelectorAll(".answer-row>button")
let lastSection = document.querySelector('.last-screen-time')
let correct = 0;
let incorrect = 0;
let resultHeading = document.querySelector('.result-heading')
let currentRight;
let signs = ["-", "+"]

let results = 0;

function startGame() {
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");
    setTimeout(lastScreen, 15000)
    question()
    results = 0;
    correct = 0;
    incorrect = 0;
}

startBtn.addEventListener('click', startGame);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function question() {
    let n1 = getRandomInt(500);
    let n2 = getRandomInt(500);
    let sign = signs[getRandomInt(signs.length)]
    questionHeading.innerHTML = `${n1}${sign}${n2}`;
    createAnswer(n1, n2, sign)
}

function createAnswer(n1, n2, sign) {
    let correctNumber = getRandomInt(buttons.length);
    for (let i = 0; i < buttons.length; i += 1) {
        if (i === correctNumber) {

            if (sign === "-") {
                buttons[i].innerHTML = n1 - n2;
                buttons[i].className = 'color-hide'
                currentRight = n1 - n2

            }
            else {
                buttons[i].innerHTML = n1 + n2;
                buttons[i].className = 'color-hide'
                currentRight = n1 + n2;
            }
        } else {
            buttons[i].innerHTML = getRandomInt(500);
            buttons[i].className = 'color-hide1'
        }
    }
}

for (let m = 0; m < buttons.length; m += 1) {
    buttons[m].addEventListener('click', question)
    buttons[m].addEventListener('click', check(m))
}


function check(i) {
    return function () {
        results += 1;
        if (+buttons[i].innerHTML === currentRight) {
            correct = correct + 1;
        }
        else {
            incorrect = incorrect + 1;
        }
    }
}



function lastScreen() {
    quizSection.classList.add("hide");
    startSection.classList.remove("hide");
    resultHeading.classList.remove('hide');
    resultHeading.innerHTML = `total:${results}
    correct:${correct}
    incorrect:${incorrect}`
}



