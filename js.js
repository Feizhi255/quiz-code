console.dir(document)
console.log(document)

//title
let title = document.createElement('title')
console.log(title)
title.textContent = 'Code Quiz'
document.head.appendChild(title)

//h1 tag
let h1 = document.createElement('h1')
console.log(h1)
h1.textContent = "Code Quiz"
document.body.appendChild(h1)
h1.parentElement.style.textAlign = "center"

//start btn
let btn = document.createElement('BUTTON')
btn.classList.add('start-quiz')
console.log(btn)
btn.innerHTML = "Start Quiz"
document.body.appendChild(btn)


//timer
let countDownTimer = document.createElement('h2');
countDownTimer.classList.add('countDown');
console.log(countDownTimer);
countDownTimer.innerHTML = "60"
document.body.appendChild(countDownTimer)

//div question
let textQuestion = document.createElement('div');
console.log(textQuestion)
//card area
textQuestion.classList.add('card')
textQuestion.innerHTML = "how r u?"
document.body.append(textQuestion)


//on click count down timer
var timeEl = document.querySelector(".countDown");
var mainEl = document.getElementById("main");
let questionArea = "";

var secondsLeft = 60;

document.querySelector('.start-quiz').addEventListener('click', function () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            questionArea();
            sendMessage();
        }

    }, 1000);
})

//time runs put
function sendMessage() {
    timeEl.textContent = "Time is up ";

}

//question starts
// document.querySelector('.start-quiz').addEventListener('click', function () {
//     //div question
//     let textQuestion = document.createElement('div');
//     console.log(textQuestion)
//     //card area
//     textQuestion.classList.add('card')
//     textQuestion.innerHTML = "how r u?"
//     document.body.append(textQuestion)
// })




//setTime();


