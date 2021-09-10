const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;

function preload() {
    ball_img = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600, 300, 400, 20);
    
    box1 = new Box(500, 250, 50, 70);
    box2 = new Box(550, 250, 50, 70);
    box3 = new Box(600, 250, 50, 70);
    box4 = new Box(650, 250, 50, 70);
    box5 = new Box(700, 250, 50, 70);

    box6 = new Box(550, 180, 50, 70);
    box7 = new Box(600, 180, 50, 70);
    box8 = new Box(650, 180, 50, 70);

    box9 = new Box(600, 110, 50, 70);

    ball = Bodies.circle(110, 195, 20);
    World.add(world, ball);
 
    slingshot=new SlingShot(this.ball,{x:160,y:195})
}









function draw() {
    background("lightpink")
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ground.display();
    slingshot.display();

    imageMode(CENTER);
    image(ball_img, ball.position.x, ball.position.y,40,40);
    textSize(30); fill("white"); text(mouseX + "," + mouseY,30,30);
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}