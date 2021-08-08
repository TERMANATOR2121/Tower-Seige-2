class Stand2{
    constructor() {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(900, 300, 300, 10, options);
        World.add(world, this.ground);
      }
      display(){
        fill("white");
        rectMode(CENTER);
        rect(900, 300, 300, 10);
      }
    };