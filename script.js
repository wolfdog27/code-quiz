// Need to make title page with start button
// when then timer begins and asked a question
// if correct - ask next quesiton - maybe add more time?
//      if else statements
// if incorrect - minus time - ask next question
// reaches 0, game ends and go to score page
// can save initals and score on score page
// add button to play again?


var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "https://i.ytimg.com/vi/3WV9yAznCgo/hqdefault.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

// var myQuiz = ("#quizContainer");
// var secondsRemaining = questions.length * 15;
// var timer;
// var userAnswer;
// var answer = questions[answer];
// var currentIndex = 0;
// var startQuiz = document.getElementById("startGame");


// function displayQuestion() {
//     document.getElementById("card-header").innerHTML = "";
//     document.getElementById("card-body").innerHTML = "";
  
//     var titleElement = document.createElement("h1");
//     var currentQuestion = questions[currentIndex].title;
//     titleElement.textContent = currentQuestion;
  
//     var cardHeader = document.getElementById("card-header");
//     cardHeader.appendChild(titleElement);
  
//     var choices = questions[currentIndex].choices;
  
//     for (var i = 0; i < choices.length; i++) {
//       var choicesElement = document.createElement("button");
//       var cardBody = document.getElementById("card-body");
//       cardBody.appendChild(choicesElement);
//       choicesElement.textContent = choices[i];
//       choicesElement.onclick = isCorrectAnswer;
//     }
  
//     console.log(choices);
//   }
  
//   function isCorrectAnswer() {
//   var answer = questions[currentIndex].answer;
//   userAnswer = this.innerHTML;

//   if (userAnswer === answer) {
//     console.log("answer correct");
//   } else if (userAnswer !== answer) {
//     removeTime();
//     console.log("answer incorrect");
//   }
//   currentIndex++;
//   if (currentIndex === questions.length) {
//     console.log(getScore());
//     window.location.href = "highscore.html";
//   }
//   displayQuestion();
//   console.log("finish isCorrectAnswer");
// }

// function addTime() {
//   secondsRemaining += 15;
// }

// function removeTime() {
//   secondsRemaining -= 15;
// }

// function getScore() {
//   return secondsRemaining;
// }
// localStorage.setItem("Score", secondsRemaining);

// function getUserInfo() {}

// function saveScore() {}

// console.log(questions);