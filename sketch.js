const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var bird;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(displayWidth/2,displayHeight-50,displayWidth,30);
    box1 = new Box(displayWidth-500,displayHeight-80,70,70);
    box2 = new Box(displayWidth-720,displayHeight-80,70,70);
    box3 = new Box(displayWidth-500,displayHeight-150,70,70);
    box4 = new Box(displayWidth-720,displayHeight-150,70,70);
    box5 = new Box(displayWidth-610,displayHeight-220,70,70);

    bird = new Bird(displayWidth/2,displayHeight/2);

    pig1 = new Pig(displayWidth-610,displayHeight-80);
    pig2 = new Pig(displayWidth-610,displayHeight-150);

    log1 = new Log(displayWidth-610,displayHeight-130,300,PI/2);
    log2 = new Log(displayWidth-610,displayHeight-220,300,PI/2);
    log3 = new Log(displayWidth-700,displayHeight-300,150,PI/7);
    log4 = new Log(displayWidth-580,displayHeight-300,150,-PI/7);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();

}