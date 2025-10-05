



var question = [
    {question:"What is the Tallest Mountain in the World", multiple_options:["Mount Kilamanjaro","K2","Mount Everest","Rocky Mountains"], answer:2},
    {question:" What is the name of the longest river in the World?", multiple_options:["Nile River","Congo River","Amazon River","Yellow river"], answer:0},
    {question:"What country has the most natural lakes?", multiple_options:["United States","Canada","Australia","United Kingdom"], answer:1},
    {question:" How many States does the United States consist of?", multiple_options:["49","60","51","50"], answer:3},
    {question:"What is the capital of the American State of California?", multiple_options:["San Francisco","San Diego","Sacramento","LA"], answer:2},
    {question:"How many countries are there in the United Kingdom?", multiple_options:["4","2","5","3"], answer:0},
    {question:"What is the name of the largest city in Australia?", multiple_options:["Perth","Sydney","Bisbane","Melbourne"], answer:2},
    {question:"What is the name of the largest airport in the United States of America?", multiple_options:["Los Angeles International Airport","John F Kennedy International Airport","Hartsfield-Jackson Atlanta International Airport","Denver International Airport"], answer:3},
    {question:"Pierre is the capital of what US state?", multiple_options:["South Dakota","Florida","Rhode Island","North Dakota"], answer:0},
    {question:"How many US states share a border with Canada?", multiple_options:["10","15","13","9"], answer:2},
    {question:"Where is one Founder of Warner Brothers From", multiple_options:["Miami","New York","Toronto","London, Ontario"], answer:3},
    {question:"Where will the 2028 Summer Olympics be held?", multiple_options:["Tokyo","Milan","LA","Paris"], answer:2},
    {question:"In what game is “love” a score?", multiple_options:["Baseball","golf","tennis","Bowling"], answer:2},
    {question:"What year did TikTok launch?", multiple_options:["2015","2017","2020","2019"], answer:1},
    {question:"What is the capital of Norway?", multiple_options:["Oslo","Stockholm","Helsinki","Munich"], answer:0},
    {question:"What is the 17th letter of the English alphabet?", multiple_options:["P","R","V","Q"], answer:3},
    {question:"If you get an eagle in golf, how many strokes did you get?", multiple_options:["2 under par","1 under par","3 under par","4 under par"], answer:0},
    {question:"Toronto is on which body of water?", multiple_options:["Lake Ontario","Lake Erie","Lake Huron","Lake Superior"], answer:0},
    {question:"How many MLB teams are there?", multiple_options:["31","25","37","30"], answer:3},


]
var score = 0
var counter = 0
 var tracker = counter+1
function shuffleArray(question) {
  for (let i = question.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [question[i], question[j]] = [question[j], question[i]];
  }
  return question;
}

function showQuestion(counter) {
   var question_tracker = document.getElementById("question_tracker")
    question_tracker.innerHTML=`<p class="card-title" id="question_tracker">Question ${tracker}/20</p>`
    var question_header = document.getElementById("Question")
    question_header.innerHTML=` <h3 id="Question">${question[counter].question}</h3>`
    var question_score = document.getElementById("score")
    question_score.innerHTML = `<p id="score">score = ${score}</p>`
    var option_div = document.getElementById("optionsDiv")
    document.getElementById("one").innerHTML=`${question[counter].multiple_options[0]}`
    document.getElementById("two").innerHTML=`${question[counter].multiple_options[1]}`
    document.getElementById("three").innerHTML=`${question[counter].multiple_options[2]}`
    document.getElementById("four").innerHTML=`${question[counter].multiple_options[3]}`

    document.getElementById("one").setAttribute("value",`${question[counter].multiple_options[0]}`)
    document.getElementById("two").setAttribute("value",`${question[counter].multiple_options[1]}`)
    document.getElementById("three").setAttribute("value",`${question[counter].multiple_options[2]}`)
    document.getElementById("four").setAttribute("value",`${question[counter].multiple_options[3]}`)
    console.log(option_div)
}
function checkAnswer(event){
    userAnswer = event.target.value
    console.log(userAnswer)
    answerIndex = question[counter].answer
     if (question[counter].multiple_options[answerIndex] === userAnswer){
        score = score+1
        console.log(score)
     }
     if (question[counter].multiple_options[answerIndex] !== userAnswer){
        score = score -1
        console.log(score) 
     }
    

}
function timerFunction (duration, display){
    var timer = duration, minutes, seconds
    setInterval(function(){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        display.textContent = minutes + ":" + seconds
        if(--timer < 0){
            timer = 0
            localStorage.setItem("score", score)
            alert("time is up ")
            window.location.href = "./score.html"
            console.log(score)
            
            
        }
    },1000)
}
shuffleArray(question)
showQuestion(counter)
document.getElementById("next").addEventListener("click",function(e){
    if (counter < 20){
        counter = counter+1
        tracker = tracker+1
        showQuestion(counter)
    }
    if (counter === 20){
        localStorage.setItem("score", score)
            
            window.location.href = "./score.html"
            console.log(score)
    }



})
document.getElementById("previous").addEventListener("click",function(e){
    if (counter > 0){
        counter = counter-1
        tracker = tracker-1
        showQuestion(counter)
    }
})
// document.getElementById("start").addEventListener("click",function(e){
//     console.log("Hello world")
//     var time = 2 * 60
//         display = document.querySelector('#quizTimer')
//     timerFunction(time, display)
    
// })
// function test (){
//     console.log("testing")
//     window.location.href = "question_1.html"

  
// }

window.addEventListener("DOMContentLoaded", function () {
    // Check if current page is question_1.html
    if (window.location.pathname.endsWith("question_1.html")) {
    console.log("Hello world")
    var time = 2 * 60
        display = document.querySelector('#quizTimer')
    timerFunction(time,display)

    }
  });
