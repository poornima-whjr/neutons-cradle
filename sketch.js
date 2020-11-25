
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(800);
	
	bob1=new Bob(250,500);
	bob2=new Bob(300,500);
	bob3=new Bob(350,500);
	bob4=new Bob(400,500);
	bob5=new Bob(450,500);

	chain1=new Chain(bob1,roof,-150,0);
	chain2=new Chain(bob2,roof,-100,0);
	chain3=new Chain(bob3,roof,-50,0);
	chain4=new Chain(bob4,roof,0,0);
	chain5=new Chain(bob5,roof,50,0);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
		console.log(bob1.body.position);
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1,y:-1});
	}
}

