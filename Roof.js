class Roof{
    constructor(width){
        this.body = Bodies.rectangle(400,20,width,20,{isStatic:true});
        this.x=400;
        this.y=20;
        this.width = width
        this.height = 20;
        World.add(world,this.body);
    }

    display(){
       
        fill("Brounn");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}