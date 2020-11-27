class Bob{
    constructor(x,y){
        var options={
            restitution:1,
			friction:0,
			density:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        this.x=x;
        this.y=y;
        this.radius = 25;
        World.add(world,this.body);
    }

    display(){
       
        fill("yellow");
        circle(this.body.position.x,this.body.position.y,this.radius*2);
        
    }
}