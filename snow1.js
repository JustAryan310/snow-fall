class Snow1{
    constructor(x,y,r){
var options={
    restitution:0.4,
    density:0.5
}
this.r=r
this.body=Bodies.circle(x,y,this.r,options)
this.snow1=loadImage("snow4.webp")
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.snow1,pos.x,pos.y,20,20)
        pop()
    }
}