var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+ userName + " to How Well you know Shubam? ");
console.log("\n")



var score = 0;
function askQuiz(ques,ans)
{

  var userAnswer = readlineSync.question(ques);
  if(userAnswer.toUpperCase() === ans.toUpperCase())
  {
    console.log("Correct Answer!");
    score = score + 1;
  } else {
    console.log("Incorrect Answer!");
    score = score - 1;
  }

  if(score<0)
  {
    score = 0;
    console.log("Try hard")
  }
  console.log("Your Current Score is: ", score);
  console.log("\n");
}

var q1 = "what color Shubam likes to wear ??";
var a1 = "Black";
var q2 = "what is his favourite place to live?";
var a2 = "Srinagar"; 
var q3 = "What is his fav food?";
var a3 = "Momos";
var q4 = "What phone does Shubam Use";
var a4 = "Oneplus8pro";
var q5 = "what do Shubam do in his free time ?";
var a5 = "coding";

askQuiz(q1,a1);
 
askQuiz(q2,a2);
 
askQuiz(q3,a3);
 
askQuiz(q4,a4);

askQuiz(q5,a5);
console.log("\n");
console.log(userName + ", your score is, "+ score + " out of 5");