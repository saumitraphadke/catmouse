var bgImg;
var cat1, cat2;
var mouse1, mouse2, mouse3;

function preload() {
    bgImg = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png","mouse3.png");


}

function setup(){
    createCanvas(800,800);
bgImg = createSprite(200, 200, 30, 30);
bgImg.addImage("bgImg");
mouse1 = createSprite(200, 100, 30, 30);
mouse1.addAnimation("mouse1");
cat1 = createSprite(600, 100, 30, 30);
cat1.addAnimation("cat1");
}

function draw() {

    background("bgImg");
    

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse2.addAnimation("mouse2");
        mouse1.changeAnimation("mouse2");
        mouse1.frameDelay = 25;
    }


}
