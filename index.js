var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;
console.log(chalk.green.bold.underline("Welcome to Cartoons quiz") + chalk.red(" !"));
console.log(" ");
var userName = readlineSync.question(chalk.yellow("Whats your name?  "));
console.log(" ");

console.log("Welcome " + chalk.blue(userName) + " Do you know about Cartoons");
console.log(" ");

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You Answered: "+ answer);
    console.log(chalk.bgGreen("right!"));
    score = score + 1;
  }
  else{
    console.log(chalk.bgRed("wrong!"));
  }
  console.log("Current Score: ",score);
    console.log(chalk.magentaBright("--------------------------------"));
    console.log("");
}
//array of objects
var questions = [{
  question: "Q1) In the cartoon “The Jungle Book”, which musical band refused to be a part of the vultures? A. Aerosmith B. The Beatles C. The Rolling Stones  ",
  answer: "b"
},{
  question: "Q2)In the cartoon “The Little Mermaid”, how old is Ariel at the time of marrying Eric? A. 16 years old B. 18 years old C. 20 years old  ",
  answer: "a"
},{
  question: "Q3) What is another name of the Mickey Mouse? A. Mortimer Mouse B. Melvin Mouse C. Marty Mouse  ",
  answer: "a"
},{
  question: "Q4) What is the original name of Winnie the Pooh? A. Edward Bear B. Wendell Bear C. Christopher Bear  ",
  answer: "a"
},{
  question: "Q5) Which yellow bird can never believe its own eyes? A. Tweety Bird B. Daffy Duck C. Sylvester Bird ",
  answer: "a"
},{
  question: "Q6)Which cartoon character does not know that he smells bad? A. Pepe Le Pew B. Yosemite Sam C. Mr. Magoo ",
  answer: "a"
},{
  question: "Q7) What is the name of the villain in “The Lion King” A. Simba B. Mustafa C. Scar ",
  answer: "c"
},{
  question: "Q8) The word “Simba” in “The Lion King” is originated from which language” A. Turkish B. Swahili C. Afrikaans",
  answer: "b"
},{
  question: "Q9) What is the name of the Mickey Mouse’s girlfriend? A. Annie B. Minnie C. Sandra  ",
  answer: "b"
},{
  question: "Q10) “Little April Shower” is the song featuring in which cartoon of Disney? A. Frozen B. Bambi C. Coco  ",
  answer: "b"
}];

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer); 
}

console.log(chalk.bgYellowBright("YAY! You SCORED " + score + " out of 10"));
if(score >= 5){
  console.log(chlak.bold.italic("WoW! you know well😍😍"));
}
else{
  console.log("Ohh..., you don't enjoy your childhood much 😜😁");
}