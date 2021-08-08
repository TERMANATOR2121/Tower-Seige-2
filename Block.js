class Block {
    constructor(x, y, width, height) {
        var options = {
            resitiution: 0.4,
            friction: 1,
        }

        this.image = loadImage("Block.jpg");
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;

    }
    display() {
        if (this.body.speed < 4) {
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, 30, 40);
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 30, 40);
            pop();
        }
    }
    score() {
        if (this.Visiblity < 0 && this.Visiblity > -1005) {
            score = score + 10;
        }
    }
};


