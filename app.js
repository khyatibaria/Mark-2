const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score=0;

function Welcome()
{
var userName= readlineSync.question(chalk.cyanBright(("Please Enter Your Name?")));
console.log(chalk.yellowBright('WELCOME '+userName+ ' FUN FOOD QUIZ \n'));

  console.log(chalk.yellowBright.bold("----------------------------------------"));
  console.log();
  console.log(chalk.cyanBright.bold("RULES OF THE GAME ARE SIMPLE")); 
  console.log(chalk.cyanBright.italic("1). All the QUESTIONS are COMPULSORY"));
  console.log(chalk.cyanBright.italic("2). If you answer RIGHT you score 2 Points"));
  console.log(chalk.cyanBright.italic("3). If you answer WRONG you Lose 1 Point"));
  console.log();
  console.log(chalk.yellowBright.bold("----------LETS START THE GAME------------"));

}

var quesBank=[
  {
    question: `
	What country is renowned for chocolate?
	a) Finland
	b) Belgium
	c) Argentina\n`,
		answer: "b"
  },
  {
    question: `
	Which of these was called "food of the gods" in ancient India?
	a) Yogurt
	b) Potato
	c) Bread\n`,
		answer: "a"
  },
  {
    question: `
	Which is the most stolen food in the world?
	a) Candy
	b) Cheese
	c) Chips\n`,
		answer: "b"
  },
  {
    question: `
	One food that all races eat is what?
	a) Chocolate
	b) Bread
	c) Cheese\n`,
		answer: "b"
  },
  {
    question: `
	What is the third most popular drink?
	a) Coffee
	b) Beer
	c) Water\n`,
		answer: "b"
  },
  {
    question: `
  Which is the national food of India?
  a) Khichdi
  b) Roti
  c) Dal\n`,
		answer: "a"
  },
  {
    question: `
	Strawberry is good source of which vitamin?
  a) Vitamin C
  b) Vitamin A
  c) Vitamin K\n`,
		answer: "a"
  },
  {
    question: `
  Where does coffee originate from?
  a) Canada
  b) Italy
  c) Ethiopia\n`,
		answer: "c"
  }
];

var highScore=[
  {
    name:"Khyati",
    score:12
  },
  {
    name:"Nikhil",
    score:10
  },
];

function check(question, answer)
{
   var userAns=readlineSync.question(question);

   if( userAns.toUpperCase() === answer.toUpperCase())
   {
    console.log();
    console.log(chalk.green.italic.bold("Your are Right!!!!!"));
    console.log();
    score=score+2;
   } else{
    console.log();
    console.log(chalk.red.italic.bold("Your are Wrong!!!!!"));
    console.log();
    score=score-1;
  } 
  console.log(chalk.blue("Your Score is:",score));
  console.log();
  console.log(chalk.yellowBright.bold("---------------------------------------")); 
  console.log();
}

function play(){
   for(var i=0; i<quesBank.length;i++){
     var currentItem= quesBank[i];
     check(currentItem.question, currentItem.answer)
   }
}

function showScore(){
  console.log(chalk.blue("Thanks for Playing!!!!!!!!!!"))
console.log(chalk.green ("Your Total Score is: ", score));
  console.log(chalk.yellowBright("----------------------------------------"));
for(var i=0;i<highScore.length;i++)
{
  var current = highScore[i];
  if(score>current.score)
  {
    console.log(chalk.red('Congratulations! You have Beaten '+ current.name + " " +" in Quiz Game"));
  }
}
}
Welcome()
play()
showScore()

