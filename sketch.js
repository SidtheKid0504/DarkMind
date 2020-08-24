var player;
var backgroundImg;
var ground, groundImg;
var spike1, spike2, spike3, spike4;
var enemyImg, enemy;

function preload() {
  backgroundImg = loadImage('images/LevelOneBG.png');
  groundImg = loadImage('images/GameGround.png');

  enemyImg = loadImage('images/enemyFrames/enemyWalk1.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  player = new Player();
  spike1 = new Spike(1200, 700);
  spike2 = new Spike(1500, 700);
  spike3 = new Spike(1900, 700);
  spike4 = new Spike(2100, 400);


  ground = createSprite(displayWidth/2, displayHeight - 60, displayWidth, 40);
  ground.addImage(groundImg);

  enemy = createSprite(200, 200, 20, 20);
  enemy.addImage(enemyImg);
  enemy.scale = 2;
}

function draw() {
  background(backgroundImg);  
  player.display();
  player.playerMove();

  spike1.display();
  spike1.damagePlayer(player.getPlayerSprite());

  spike2.display();
  spike2.damagePlayer(player.getPlayerSprite());

  spike3.display();
  spike3.damagePlayer(player.getPlayerSprite());

  spike4.display();
  spike4.damagePlayer(player.getPlayerSprite());

  drawSprites();

}
