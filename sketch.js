var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                       
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacle1,obstacle2; 
var cars = [];
var blastImage;    
var currentLife = 0;              

var soundBg, levelUpSound, coinSound, hitCar, fuelSound, hit
var soundplay = false

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); 
  obstacle2Image = loadImage("./assets/obstacle2.png"); 
  blastImage = loadImage("./assets/blast.png"); 
  soundBg = loadSound('./assets/sounds/bgSound.wav');
  levelUpSound = loadSound('./assets/sounds/levelUp.wav');
  coinSound = loadSound('./assets/sounds/coinRetro.wav');
  fuelSound = loadSound('./assets/sounds/fuelSound.wav');
  hitCar =loadSound('./assets/sounds/hitCars.wav');
  hit = loadSound('./assets/sounds/hit.wav');
 

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
    if(!soundBg.isPlaying()){
      soundBg.play();
    }
  }

  if (gameState === 2) {
    game.showLeaderboard();
   
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
