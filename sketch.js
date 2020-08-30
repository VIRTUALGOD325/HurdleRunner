var canvas, backgroundImage;

var gameState = 0;
var runnerCount;

var database;

var form, runner, game;

var allrunners;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (runnerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play();
  }
}
