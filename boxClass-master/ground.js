
class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,ground);

}
display(){
    var position = this.body.position;
    rectMode(CENTER);
    fill(100);
rect(position.x,position.y,this.width,this.height);

}
};