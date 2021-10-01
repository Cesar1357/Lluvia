class Rain2{
	constructor(x,y){
		var options = {
		 'density':1,
		 'friction': 1.0,
		 'restitution':0.3
		};
		this.x=x;
		this.y=y;
		this.r=0.5;
		this.lluvia=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.lluvia);

	}
		
	update2(){
        if(this.lluvia.position.y > height){
            Matter.Body.setPosition(this.lluvia, {x:random(0,400),y:random(-0,400)});
        }
    }
	
	

	display(){
	
			var goatpos=this.lluvia.position;		
			push()
			translate(goatpos.x, goatpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("green");
			fill("lightgreen");
			ellipse(0,0,this.r,this.r);
			pop()
        }
	}
