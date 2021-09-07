const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var chain1,chain2,chain3,chain4,chain5,chain5;
var trainSound 
var crashSound
var flag = 0;
var rock;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1=new Booggie(50,170,50,50);
  boggie2=new Booggie(145,170,50,50);
  boggie3=new Booggie(245,170,50,50);
  boggie4=new Booggie(345,170,50,50);
  boggie5=new Booggie(445,170,50,50);
  boggie6=new Booggie(545,170,50,50);
  rock=new Rock(1100,170,200,200);
 chain1=new SlingShot(boggie1.body,boggie2.body)
 chain2=new SlingShot(boggie2.body,boggie3.body)
 chain3=new SlingShot(boggie3.body,boggie4.body)
 chain4=new SlingShot(boggie4.body,boggie5.body)
 chain5=new SlingShot(boggie5.body,boggie6.body)
 

}

function draw() {
  background(bg);  
  
  Engine.update(myEngine);
  boggie1.show()
  boggie2.show()
  boggie3.show()
  boggie4.show()
  boggie5.show()
  boggie6.show()
  rock.show()
  chain1.show()
  chain2.show()
  chain3.show()
  chain4.show()
  chain5.show()
 var collision = Matter.SAT.collides(boggie6.body,rock.body)

 if(collision.collided){

  flag=1
 }
 if(flag===1){
   fill("blue")
   textSize(100)
 text("Crash",400,100)
 crashSound.play()

 }
  }   
  
  function keyPressed()
  {
    if(keyCode === 32){
      Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y},
        {x:0.5,y:0});
        trainSound.play();
    }


  }

