
class Contestant {
    constructor(){
      this.index = null;
      this.answer = null;
      this.name = null; 
    }
  
    getCount(){
        var contestantCount = database.ref("contestantCount");
         
        contestantCount.on("value",(data)=>{
        contestantCount = data.val();  
      })
    }
  //

    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getPlayerInfo(){              // this info is not going to change..
  
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  