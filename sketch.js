var monster1;

function preload() {
//preload the images here
monster1 = loadImage("Monster-01.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  monster1 = createSprite(200,200,50,50);
}
function draw() {
  background(0);

}
drawSprites();