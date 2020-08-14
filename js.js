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

//corret answer
var correct = "";

//wrong answer
var wrong = "";

//next question?
var next = "";

//store the score
var score = "";

//Notes next to work on is moving to the next question once first is ansowered


//question starts
document.querySelector('.start-quiz').addEventListener('click', function () {
    var question = document.getElementById('question');
    question.textContent += "How Are You?";

    var answer = document.getElementById('answer')

    //correct answer
    var btn1 = document.getElementById('btn1')
    btn1.textContent += "Good";
    document.querySelector('#btn1').addEventListener('click', function(){
        answer.textContent += "Correct!"
        score = 1;
    })

    var btn2 = document.getElementById('btn2')
    btn2.textContent += "Awsome";
    document.querySelector('#btn2').addEventListener('click', function(){
        answer.textContent += "Wrong!!"

    })

    var btn3 = document.getElementById('btn3')
    btn3.textContent += "Ok";
    document.querySelector('#btn3').addEventListener('click', function(){
        answer.textContent += "Wrong!!!"

    })

    var btn4 = document.getElementById('btn4')
    btn4.textContent += "Bad";
    document.querySelector('#btn4').addEventListener('click', function(){
        answer.textContent += "Wrong!!!!"

    })
})



//setTime();





//variables

//title
// let title = document.createElement('title')
// console.log(title)
// title.textContent = 'Code Quiz'
// document.head.appendChild(title)

// //h1 tag
// let h1 = document.createElement('h1')
// console.log(h1)
// h1.textContent = "Code Quiz"
// document.body.appendChild(h1)
// h1.parentElement.style.textAlign = "center"

// //start btn
// let btn = document.createElement('BUTTON')
// btn.classList.add('start-quiz')
// console.log(btn)
// btn.innerHTML = "Start Quiz"
// document.body.appendChild(btn)


// //timer
// let countDownTimer = document.createElement('h2');
// countDownTimer.classList.add('countDown');
// console.log(countDownTimer);
// countDownTimer.innerHTML = "60"
// document.body.appendChild(countDownTimer)



// //div question
// let textQuestion = document.createElement('h2');
// console.log(textQuestion)
// //card area
// textQuestion.classList.add('card')
// textQuestion.innerHTML = "how r u?"
// document.body.append(textQuestion)

// //buttons1
// let botton1 = document.createElement('BUTTON')
// botton1.classList.add('card-body')
// console.log(botton1)
// botton1.innerHTML = "Good"
// document.body.appendChild(botton1)

// //buttons2
// let botton2 = document.createElement('BUTTON')
// botton2.classList.add('card-body')
// console.log(botton2)
// botton2.innerHTML = "Amazing"
// document.body.appendChild(botton2)

// //buttons3
// let botton3 = document.createElement('BUTTON')
// botton3.classList.add('card-body')
// console.log(botton3)
// botton3.innerHTML = "ok"
// document.body.appendChild(botton3)

// //buttons4
// let botton4 = document.createElement('BUTTON')
// botton4.classList.add('card-body')
// console.log(botton4)
// botton4.innerHTML = "Bad"
// document.body.appendChild(botton4)





//click show button

//     //buttons1
//     let botton1 = document.createElement('BUTTON')
//     botton1.classList.add('card-body')
//     console.log(botton1)
//     botton1.innerHTML = "Good"
//     document.body.appendChild(botton1)

//     //buttons2
//     let botton2 = document.createElement('BUTTON')
//     botton2.classList.add('card-body')
//     console.log(botton2)
//     botton2.innerHTML = "Amazing"
//     document.body.appendChild(botton2)

//     //buttons3
//     let botton3 = document.createElement('BUTTON')
//     botton3.classList.add('card-body')
//     console.log(botton3)
//     botton3.innerHTML = "ok"
//     document.body.appendChild(botton3)

//     //buttons4
//     let botton4 = document.createElement('BUTTON')
//     botton4.classList.add('card-body')
//     console.log(botton4)
//     botton4.innerHTML = "Bad"
//     document.body.appendChild(botton4)
//