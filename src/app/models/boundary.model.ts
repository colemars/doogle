import * as Matter from 'matter-js';
import * as p5 from 'p5';

export class Boundary {
  [x: string]: any;
  constructor(x, y, w, h, options, world) {
    this.w = w;
    this.h = h;
    this.world = world;
    this.options = {
      friction: 0,
      restitution: 1,
      isStatic: true,
    }

    this.body = Matter.Bodies.rectangle(x,y,w,h,options)
    Matter.World.add(this.world, this.body);

  }

  show(p5) {


       let pos = this.body.position;
       let angle = this.body.angle;

       p5.push();
       p5.translate(pos.x, pos.y);
       p5.rotate(angle);
       p5.rectMode(p5.CENTER);
       p5.fill('#f2f2f2');
       p5.stroke('#e5e5e5')
       p5.rect(0,0, this.w, this.h);
       p5.pop();


  }

  delete() {
    Matter.World.remove(this.world,this.body)
  }

}
