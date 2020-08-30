class Player {
  constructor(){
    this.index = null
    this.distance = 0 
    this.name = null 
      
  }

  getCount(){
    var runnerCountRef = database.ref('runnerCount');
    runnerCountRef.on("value", (data) => {
      runnerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      runnerCount: count
    });
  }

  update(){
    var runnerIndex = "players/player" + this.index;
    database.ref(runnerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var runnerInfoRef = database.ref('players');
    runnerInfoRef.on("value",(data)=>{
      allrunners = data.val();
    } )
  }
}
