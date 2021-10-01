class Piso {
    constructor(x, y) {
      var options = {
        isStatic: true,
        'density':30,
        'friction': 3.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 400, 10, options);
      this.width = 400;
      this.height = 10;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('iron')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  