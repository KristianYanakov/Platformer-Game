class Block{
    constructor(type, x, y, sx, sy, image){
        this.type = type
        
        this.x = x
        this.y = y
        this.sx = sx
        this.sy = sy
        
        this.imagePath = image
        this.image = new Image()
        this.image.src = this.imagePath
    }
    
    draw(){
        context.drawImage(this.image, this.x, this.y, this.sx, this.sy)
    }

    get blockType(){
        console.log(`Block TYPE = ${this.type}`)
    }
}

class GroundEntity{
    constructor(type, x, y, sx, sy, image, weight){
        this.type = type
        
        this.x = x
        this.y = y
        this.sx = sx
        this.sy = sy
        
        this.imagePath = image
        this.image = new Image()
        this.image.src = this.imagePath
        
        this.weight = weight
        
    }

    draw(){
        context.drawImage(this.image, this.x, this.y, this.sx, this.sy)
    }

    fall(){
        
    }

    move(){
        //Implement Movement
    }

    get entityType(){
        console.log(`ENTITY TYPE = ${this.type}`)
    }
}

let zombieT = new GroundEntity('zombie', 0, 0, 80, 110, "images/zombie.png", 10)

//zombieT.entityType

let blockT = new Block('box', 100, 100, 30, 30, "images/box.png")
blockT.blockType

function update() {

}

function draw() {
    zombieT.draw()
    blockT.draw()
}

function keyup(key) {
    //console.log("Pressed", key);


}

function mouseup() {
    //console.log("Mouse clicked at", mouseX, mouseY);

}
