class Plinko {

    constructor(x,y,radius){

        var options = {

            isStatic: true,
        }

    
        this.body = Bodies.circle(x,y,radius-10,options);
        
        this.radius = radius;

        this.trajectory = [];

        World.add(world,this.body);
    }
    
    display(colour,x,y,radius){

        fill(colour);
        ellipseMode(CENTER);
/*
        push();

        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
        
        for (var i = 0; i < this.trajectory.length; i++) {
            ellipse(this.trajectory[i][0],this.trajectory[i][1],this.radius,this.radius);
        }

        pop();
*/
        ellipse(x,y,radius,radius);
    }
}