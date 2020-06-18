// create global var
var questionsContainer= document.querySelector("#question-container")
var startBtn=document.querySelector("#start-btn")
var questionDiv=document.querySelector("#question")
var answerBtn1=document.querySelector(".btn1")
var answerBtn2=document.querySelector(".btn2")
var answerBtn3=document.querySelector(".btn3")
var answerBtn4=document.querySelector(".btn4")
var answersDiv= document.querySelector("#answer-buttons")

var userName = "";



var score = 0
var count =0
var timeRemaining = 60
var timeEl = document.querySelector(".time");

// all questions and answers
var myQuestions=[
    {
        question:"What were the names of Ursula’s two pet eels?",
        ans1:"Key and Peele",
        ans2:"Flotsam and Jetsam",
        ans3:"Tom and Jerry",
        ans4:"Harry and Sally",
        correctAnswer:"Flotsam and Jetsam"
    },
    {
        question:"What is the name of Wendy’s dog in Peter Pan?",
        ans1:"Daisy",
        ans2:"Karen",
        ans3:"Papa",
        ans4:"Nana",
        correctAnswer:"Nana"
    },
    {
        question:"What does Hakuna Matata mean?",
        ans1:"No worries",
        ans2:"I got so many worries",
        ans3:"Tiny worries",
        ans4:"What was that?",
        correctAnswer:"No worries"
    }
]
// hide the questinsContainer

questionsContainer.style.display="none"

// start button functions: start button goes away, buttons appear, clock starts
startBtn.addEventListener("click",function(){
    questionsContainer.style.display="block"
    startBtn.style.display="none"
    printQuestions()
    setTime()
})

//display formula for question/answers
function printQuestions(){
questionDiv.textContent= myQuestions[count].question
answerBtn1.textContent= myQuestions[count].ans1
answerBtn2.textContent= myQuestions[count].ans2
answerBtn3.textContent= myQuestions[count].ans3
answerBtn4.textContent= myQuestions[count].ans4
}

// when clicked, go to next question
answersDiv.addEventListener("click",function(){
    count ++;
    if correctAnswer then print quesietons else  wrong
printQuestions()
})

answerBtn1.addEventListener("click", function(){
    var buttonSelector = answerBtn1.textContent
    console.log (buttonSelector)
    printQuestions();
})
answerBtn2.addEventListener("click", function(){
    var buttonSelector = answerBtn2.textContent
    console.log (buttonSelector)
    printQuestions();
})
answerBtn3.addEventListener("click", function(){
    var buttonSelector = answerBtn3.textContent
    console.log (buttonSelector)
    printQuestions();
})
answerBtn4.addEventListener("click", function(){
    var buttonSelector = answerBtn4.textContent
    console.log (buttonSelector)
    printQuestions();
})

//timer
function setTime() {
    var timerInterval = setInterval(function() {
      timeRemaining--;
      timeEl.textContent = "Time remaining: "+timeRemaining;
  
      if(timeRemaining === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

// function endGame {
    
// }
  

//   var buttonSelector = document.querySelectorAll(".btn")
//   // var userInput = btn.textContent
//   console.log (buttonSelector)
//   // console.log (userInput)
//   count++;
//   console.log(myQuestions[0].ans2, myQuestions[0].correctAnswer)
  if (myQuestions[0].ans2===myQuestions[0].correctAnswer){
      timeRemaining = timeRemaining+5
  } else {
      timeRemaining = timeRemaining-2
  }




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



