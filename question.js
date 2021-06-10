class Question{


     constructor(){ 
          
     this.input1 = createInput("Name");
     this.input2 = createInput("Answer Number")
     this.button = createButton('Submit');
     this.title = createElement('h1');
     this.question = createElement('h2')
     
     this.option1 = createElement('h2');
     this.option2 = createElement('h2');
     this.option3 = createElement('h2');
     this.option4 = createElement('h2');
     
     this.greeting = createElement("h1");
    
    
    }


    hide(){

        this.input1.hide();
        this.input2.hide();

        this.button.hide();




    }

    display(){

        this.title.html("Quizz Time!");
        this.title.position(650,0);
            
        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
        this.question.position(350,100);


        this.option1.html("1: Everyone");
        this.option1.position(350,150);

        this.option2.html("2: Envelope");
        this.option2.position(350,200);

        this.option3.html("3: Estimate");
        this.option3.position(350,250);

        this.option4.html("4: Example");
        this.option4.position(350,300);

        this.input1.position(400,400);
        this.input2.position(600,400);
        
       
        




        this.button.position(560,500);


        this.button.mousePressed(()=>{

            this.input1.hide();
            this.input2.hide();
            this.button.hide();

            contestant = new Contestant();

           

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            
            contestantCount = contestantCount+1;

            contestant.index = contestantCount;

            contestant.update();
            contestant.updateCount(contestantCount);
            

            this.greeting.html("Hello "+ contestant.name+"! Please wait...other contestants have not yet submitted their answers");
            this.greeting.position(100,500)

            

            //gameState = 1;


        })

      
    }

    
}


































































