



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
    {question:"Where is the Founder of Warner Brothers From", multiple_options:["Miami","New York","Toronto","London, Ontario"], answer:2},
    {question:"Where will the 2028 Summer Olympics be held?", multiple_options:["Tokoyo","Milan","LA","Paris"], answer:2},
    {question:"In what game is “love” a score?", multiple_options:["Baseball","golf","tennis","Bowling"], answer:2},
    {question:"What year did TikTok launch?", multiple_options:["2015","2017","2020","2019"], answer:1},
    {question:"What is the capital of Norway?", multiple_options:["Oslo","Stockholm","Helsinki","Munich"], answer:0},
    {question:"What is the 17th letter of the English alphabet?", multiple_options:["P","R","V","Q"], answer:3},
    {question:"If you get an eagle in golf, how many strokes did you get?", multiple_options:["Two under par","1 under par","3 under par","4 under par"], answer:0},
    {question:"Toronto is on which body of water?", multiple_options:["Lake Ontario","Lake Erie","Lake Huron","Lake Superior"], answer:0},
    {question:"How many MLB teams are there?", multiple_options:["31","25","37","30"], answer:3},


]

var counter = 0
 var tracker = counter+1
function shuffleArray(question) {
  for (let i = question.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [question[i], question[j]] = [question[j], question[i]];
  }
  return question;
}
document.getElementById("start").addEventListener("click", function (e) {
    // window.location.href = "./question_1.html";
    console.log("hello")
    // shuffleArray(question)

});
function showQuestion(counter) {
   var question_tracker = document.getElementById("question_tracker")
    question_tracker.innerHTML=`<p class="card-title" id="question_tracker">Question ${tracker}/20</p>`
    var question_header = document.getElementById("Question")
    question_header.innerHTML=` <h3 id="Question">${question[counter].question}</h3>`

    var option_div = document.getElementById("optionsDiv")
    document.getElementById("one").innerHTML=`${question[counter].multiple_options[0]}`
    document.getElementById("two").innerHTML=`${question[counter].multiple_options[1]}`
    document.getElementById("three").innerHTML=`${question[counter].multiple_options[2]}`
    document.getElementById("four").innerHTML=`${question[counter].multiple_options[3]}`

    console.log(option_div)
}

showQuestion(counter)
document.getElementById("next").addEventListener("click",function(e){
    counter = counter+1
    tracker = tracker+1
    showQuestion(counter)


})
document.getElementById("previous").addEventListener("click",function(e){
    counter = counter-1
    tracker = tracker-1
    showQuestion(counter)
})

