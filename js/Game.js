class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      runner = new Runner();
      var runnerCountRef = await database.ref('playerCount').once("value");
      if (runnerCountRef.exists()){
         runnerCount = runnerCountRef.val();
         runner.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("GAME START", 130,100);
    Runner.getPlayerInfo();
    if (allrunners != undefined){
       text("check for all data")
       var displayPosition = 130;
       for(var plr in allrunners){
         if(plr === "player" + runner.index){
           fill("red");
          }
         else{
           fill("black");
          }
        displayPosition += 20;
        //text(allPlayers[plr].name + ":" + allPlayers[plr].distance120,displayPosition)
        
      }
      text("this is working");
    }
    if(keyDown(UP_ARROW) && player.index !== null){
      player.distance +=50;
      player.update();
    
    }
  }
}
