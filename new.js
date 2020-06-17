// create global var

var questionsContainer= document.querySelector("#question-container")
var startBtn=document.querySelector("#start-btn")
var questionDiv=document.querySelector("#question")
var answerBtn1=document.querySelector(".btn1")
var answerBtn2=document.querySelector(".btn2")
var answerBtn3=document.querySelector(".btn3")
var answerBtn4=document.querySelector(".btn4")
var answersDiv= document.querySelector("#answer-buttons")

var count =0
var score =0
var timeRemaining = 60
var timeEl = document.querySelector(".time");


var myQuestions=[
    {
        question:"question1",
        ans1:"ans1",
        ans2:"ans2",
        ans3:"ans3",
        ans4:"ans4",
        correctAnswer:"ans2"
    },
    {
        question:"question2",
        ans1:"ans1",
        ans2:"ans2",
        ans3:"ans3",
        ans4:"ans4",
        correctAnswer:"ans4"
    },
    {
        question:"question3",
        ans1:"ans1",
        ans2:"ans2",
        ans3:"ans3",
        ans4:"ans4",
        correctAnswer:"ans1"
    }
]
// hide the questinsContainer

questionsContainer.style.display="none"


startBtn.addEventListener("click",function(){
    questionsContainer.style.display="block"
    startBtn.style.display="none"
    printQuestions()
    setTime()
})


function printQuestions(){
questionDiv.textContent= myQuestions[count].question
answerBtn1.textContent= myQuestions[count].ans1
answerBtn2.textContent= myQuestions[count].ans2
answerBtn3.textContent= myQuestions[count].ans3
answerBtn4.textContent= myQuestions[count].ans4
}

answersDiv.addEventListener("click",function(event){
console.log(event.target.textContent);
if(count<myQuestions.length -1){
    count ++
}
printQuestions()
})

function setTime() {
    var timerInterval = setInterval(function() {
      timeRemaining--;
      timeEl.textContent = "Time remaining: "+timeRemaining;
  
      if(timeRemaining === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

  


// Need to make title page with start button
// when then timer begins and asked a question
// I think it needs to be an array of question and answers
    // this will be randomized and continued with every guess


// if correct - ask next quesiton - maybe add more time?
//      if else statements
// if incorrect - minus time - ask next question

// reaches 0, game ends and go to score page
// can save initals and score on score page

// add button to play again?










// timer function from class:



