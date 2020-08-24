class Spike extends BaseClass {
    constructor(x, y) {
        super(x, y);
        this.image = loadImage('images/Spike.png');
    }

    display() {
        super.display()
        this.body.scale = 0.75;
    }
}