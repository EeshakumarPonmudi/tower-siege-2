class Box {
  constructor(x, y, width, height) {
    var options = {
      //isStatic:true,
      'restitution': 0.8,
      'friction': 0,
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    if (this.body.speed < 3) {
      this.visibility = 0;
    }
    else {
      World.remove(world, this.body);
      var angle = this.body.angle;
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
       pop();
    }
  }
}