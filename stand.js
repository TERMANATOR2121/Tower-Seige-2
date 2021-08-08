class Stand1{
    constructor() {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(595, 695, 300, 10, options);
        World.add(world, this.ground);
      }
      display(){
        fill("white");
        rectMode(CENTER);
        rect(595, 695, 300, 10);
      }
    };