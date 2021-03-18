class Paper {
    constructor(x,y,r){
        var option = {restituition:0.3,density:1.2,friction:0.5}
        this.body = Bodies.circle(x,y,r,option)
        this.r = r
        this.img = loadImage("paper.png")
    World.add(world,this.body)   
}

 display (){
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     //ellipseMode(RADIUS)
    // ellipse(0,0,this.r,this.r)
    imageMode(CENTER)
     image(this.img,0,0,this.r,this.r )
     
 }

}

