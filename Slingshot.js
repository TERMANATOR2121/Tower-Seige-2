class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        fill("White");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    } 
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
        fill("White");
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;  
            strokeWeight(10);
            fill("White");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    } 
}