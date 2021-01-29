class Ball{

    constructor(x,y,radius){

        var options = {

            'restitution': 0.2,
            'friction': 0.8,
            'density': 1,
        }

        
        this.body = Bodies.circle(x,y,radius/2,options);

        this.radius = radius;

        this.colour = color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body);
        
    }

    display(){

        
            var pos = this.body.position;
            var angle = this.body.angle;

            push();

            translate(pos.x,pos.y);
            rotate(angle);

            fill(this.colour);
            ellipseMode(CENTER);
            ellipse(0,0,this.radius,this.radius);

            pop();


        if (pos.y > 770) {
            
            if (pos.x < 88 || pos.x > 392) {
                score+=300;
            }
            else if (pos.x > 88 && pos.x < 164 || pos.x > 316 && pos.x < 392) {
                score+=200;
            }
            else if (pos.x > 164 && pos.x < 240 || pos.x > 240 && pos.x < 316) {
                score+=100;
            }

            pos.y-=20;
            World.remove(world,this.body);
            this.colour = "black";
            clicked = 0;

            if (turns === 5) {
                gameState = 1;
            }
        }
        
    }

}