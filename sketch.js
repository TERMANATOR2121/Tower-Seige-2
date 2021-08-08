const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder, ball, ground;
var stand1, stand2
var slingshot;
var polygon_img;
var gameState;
var score;

function setup() {

    engine = Engine.create();
    world = engine.world;

    createCanvas(1910, 935);
    ground = new Ground(960, 930, 2000, 20);
    stand1 = new Ground(600, 720, 300, 10);
    stand2 = new Ground(900, 320, 300, 10);

    //level 1 one
    block1 = new Block(490, 675, 30, 40);
    block2 = new Block(520, 675, 30, 40);
    block3 = new Block(550, 675, 30, 40);
    block4 = new Block(580, 675, 30, 40);
    block5 = new Block(610, 675, 30, 40);
    block6 = new Block(640, 675, 30, 40);
    block7 = new Block(670, 675, 30, 40);
    block8 = new Block(700, 675, 30, 40);
    //level 1 two
    block9 = new Block(520, 635, 30, 40);
    block10 = new Block(550, 635, 30, 40);
    block11 = new Block(580, 635, 30, 40);
    block12 = new Block(610, 635, 30, 40);
    block13 = new Block(640, 635, 30, 40);
    block14 = new Block(670, 635, 30, 40);
    //level 1 three
    block15 = new Block(550, 595, 30, 40);
    block16 = new Block(580, 595, 30, 40);
    block17 = new Block(610, 595, 30, 40);
    block18 = new Block(640, 595, 30, 40);
    //level 1 four
    block19 = new Block(580, 555, 30, 40);
    block20 = new Block(610, 555, 30, 40);

    //level 2 one
    block21 = new Block(780, 275, 30, 40);
    block22 = new Block(810, 275, 30, 40);
    block23 = new Block(840, 275, 30, 40);
    block24 = new Block(870, 275, 30, 40);
    block25 = new Block(900, 275, 30, 40);
    block26 = new Block(930, 275, 30, 40);
    block27 = new Block(960, 275, 30, 40);
    block28 = new Block(990, 275, 30, 40);
    //level 2 two
    block29 = new Block(810, 235, 30, 40);
    block30 = new Block(840, 235, 30, 40);
    block31 = new Block(870, 235, 30, 40);
    block32 = new Block(900, 235, 30, 40);
    block33 = new Block(930, 235, 30, 40);
    block34 = new Block(960, 235, 30, 40);
    //level 2 three
    block35 = new Block(840, 195, 30, 40);
    block36 = new Block(870, 195, 30, 40);
    block37 = new Block(900, 195, 30, 40);
    block38 = new Block(930, 195, 30, 40);
    //level 2 four
    block39 = new Block(870, 155, 30, 40);
    block40 = new Block(900, 155, 30, 40);

    //ball with sling
    ball = Bodies.circle(50, 200, 20);
    World.add(world, ball);
    slingshot = new SlingShot(ball, { x: 200, y: 200 });
    gameState = "onSling";
    score = 0;

}

function draw() {
    //Background
    background("black");
    Engine.update(engine);
    score.update;

    noStroke();
    textSize(35);
    fill("white");
    text("Score : " + score, width - 300, 50);

    strokeWeight(2);
    stroke(15);
    stand1.display();
    stand2.display();

    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    fill("green");
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    fill("blue");
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    fill("red");
    block19.display();
    block20.display();
    fill("red");
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    fill("green");
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    fill("blue");
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    fill("red");
    block39.display();
    block40.display();

    textSize(35);
    fill("white");
    text("Drag the ball and release to knock over the boxes", 600, 50);
    text("Then Press the Spacebar to attach the ball to the launcher", 569, 100);
    ellipse(ball.position.x, ball.position.y, 30);
    fill("White");
    slingshot.display();
    drawSprites();

}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(ball);
        gameState = "onSling";
        ball.trajectory = [];
        Matter.Body.setPosition(ball, { x: 200, y: 200 });
    }
}

function mouseDragged() {
    if (gameState !== "launched") {
        Matter.Body.setPosition(ball, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    gameState = "launched";
    slingshot.fly();
}




