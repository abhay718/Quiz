class Quiz {

    constructor(){
         
    }



    getState(){

        var getGameState = database.ref('gameState');

        getGameState.on("value",function(data){

            getGameState = data.val();


        })



    }


    update(state){

    
        database.ref('/').update({gameState: state});      //sketch.js line 43
       
    }


    
   async start(){

      
    if(gameState === 0){

        contestant = new Contestant();

        var contestantcountref = await database.ref('contestantCount').once("value");

        if(contestantcountref.exists()){
               
            contestantCount = contestantcountref.val();
            contestant.getCount();



        }

       question = new Question();
       question.display();

    }

    






   }

   play(){

    question.hide();

    
    
    background("yellow");
    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
       
      // var index = 0;
       //index = index+1;
       text("*NOTE:- Players with correct answers are highlighted in green",20,400);
       
 
       for(var plr in allContestants){
 
       

       var correctAns = "2";

       if(correctAns === allContestants[plr].answer){

        fill("green");
        text("Correct Answer: "+allContestants[plr].name+ allcontestants[plr].answer);


       }
       else{

       fill("red")
       text("Wrong Answer: "+allContestants[plr].name+ allcontestants[plr].answer);


       }
      
 /*/
       if(index === contestant.index){

       }
    */
  
      }
 
 }







   }


























}