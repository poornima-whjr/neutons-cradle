class Chain{
    constructor(obj1, obj2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA : obj1.body,
            bodyB : obj2.body,
            pointB:{x:this.offsetX,y:this.offsetY}    
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.offsetX = offsetX;
        this.offsetY = offsetY;

    }

    display(){

        var pointA = this.bodyA.body.position;
        var anchorX = this.offsetX;
        var anchorY = this.offsetY;

        strokeWeight(3);
        fill('red');
        line(pointA.x, pointA.y, anchorX, anchorY);
    }

}