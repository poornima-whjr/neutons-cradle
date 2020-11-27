class Chain{
    constructor(obj1, obj2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA : obj1.body,
            bodyB : obj2.body,
            pointB:{x:this.offsetX,y:this.offsetY}    
        }
        this.bodyA=obj1.body;
        this.bodyB=obj2.body;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.offsetX = offsetX;
        this.offsetY = offsetY;

    }

    display(){

        var pointA = this.bodyA.position;
        var pointB = this.bodyB.position;
        var anchorX = this.offsetX;
        var anchorY = this.offsetY;
        
        strokeWeight(3);
        stroke('red');
        line(pointA.x, pointA.y, pointB.x+anchorX, pointB.y+anchorY);
    }

}