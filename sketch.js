var canvas;

var database;

var contestantCount; 

var allContestants;

var quiz;

var question;

var gameState = 0;

var contestant;

function setup(){
  canvas = createCanvas(1500, 700);

  database = firebase.database();
   
  quiz = new Quiz();

  quiz.getState();
  quiz.start();

//  contestant = new Contestant();

 /*/ contestantCount = contestantCount+1;
  contestant.updateCount(contestantCount)
*/









}


function draw(){
  background("lightblue");
  if(contestantCount === 4){
    quiz.update(1);
  }
 
  if(gameState === 1){
    question.clear();
    quiz.play();
    background("yellow")
  }

}
