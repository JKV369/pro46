var backgroundImage, bgImg, blue, green, red, pink;
var database, gameState;
var form, player, playerCount;
var allPlayers, box1, box2, speedPowerup, laserPowerup, coin;
var boxes = [];
var speedImage, coinImage, laserpwrimg, laser, laserimg;
var platform, movingPlatform, spike;
var platformimg, mplatformimg, spikeimg;

function preload() {
backgroundImage = loadImage("./assets/background.png");
blue = loadImage("./assets/blue.png");
red = loadImage("./assets/red.png");
green = loadImage("./assets/green.png");
pink = loadImage("./assets/pink.png");
platformimg = loadImage("./assets/platform.png");
mplatformimg = loadImage("./assets/moving.png");
spikeimg = loadImage("./assets/spike.png");
speedImage = loadImage("./assets/speed.png");
coinImage = loadImage("./assets/coin.png");
laserpwrimg = loadImage("./assets/coin.png");
laser = loadImage("./assets/bomb.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}




function draw() {
  background(backgroundImage);

  drawSprites();
}

