var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;
console.log(chalk.green.bold.underline("Welcome to Shilpe's quiz on FRIENDS") + chalk.red(" !"));
console.log(" ");
var userName = readlineSync.question(chalk.yellow("Whats your name?  "));
console.log(" ");

console.log("Welcome " + chalk.blue(userName) + " Do you know Shilpe");
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
  question: "Q1) Where do I live? \na) Prayagraj  \nb) Delhi \nc) Lucknow  \nd) Kanpur\n  ",
  answer: "a"
},{
  question: "Q2) What's my College Name? \na) UIT \nb) UCER \nc) UCEM \nd) UIM\n  ",
  answer: "b"
},{
  question: "Q3) What's do I more Like in drinks? \na) Coffee \nb) Tea \nc) Cold Drink \nd) Milk Shake\n  ",
  answer: "a"
},{
  question: "Q4) What's my favourite Color? \na) Blue \nb) Red \nc) Pink \nd) Purple\n  ",
  answer: "a"
},{
  question: "Q5) Which mode do I like? \na) Dark \nb) Light \nc) Quiet Light \nd) Solarised Light\n ",
  answer: "a"
},{
  question: "Q6)Which IDE I like most? \na) NetBeans \nb) Visual Studio \nc) Espresso \nd) MonoDevelop\n ",
  answer: "b"
},{
  question: "Q7) My favourite subject in School days? \na) Chemistry \nb) Physics \nc) Mathematics \nd) Biology\n ",
  answer: "c"
},{
  question: "Q8) What's my school name? \na) APS \nb) VPS \nc) DPS \nd) MVCS\n ",
  answer: "a"
},{
  question: "Q9) Which season I Like most? \na Summer \nb) Winter \nc) Autumn \nd) Spring\n  ",
  answer: "b"
},{
  question: "Q10) Did Shilpe get Selected for neogCamp? \na) Absolutely Yes \nb) Sure no Doubt \nc) 100% Yes \nd) YEss\n  ",
  answer: "a"
}];

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer); 
}

console.log(chalk.bgYellowBright("YAY! You SCORED " + score + " out of 10"));
if(score >= 5){
  console.log(chalk.bold.italic("WoW! you know me well😍😍"));
}
else{
  console.log(chalk.bold.italic("No Problem, one day you will know me well😜😁"));
}
