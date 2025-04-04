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
    constructor(type, x, y, sx, sy, image, weight, speed){
        this.type = type
        
        this.x = x
        this.y = y
        this.sx = sx
        this.sy = sy
        
        this.imagePath = image
        this.image = new Image()
        this.image.src = this.imagePath
        
        this.weight = weight
        this.speed = speed
    }

    draw(){
        context.drawImage(this.image, this.x, this.y, this.sx, this.sy)
    }

    fall(){
        this.y += this.weight
        this.weight += 0.1
        //Unless Standing on block
    }

    move(){
        //Implement Movement
    }

    get entityType(){
        console.log(`ENTITY TYPE = ${this.type}`)
    }
}

class Player extends GroundEntity {
    constructor(type, x, y, sx, sy, image, weight, speed) {
        super(type, x, y, sx, sy, image, weight, speed)

        this.imageCounter = 0;
    }

    move() {
        //A
        if(isKeyPressed[65]){
            this.x -= this.speed
            this.imageCounter++ 
        }
        //D
        if(isKeyPressed[68]){
            this.x += this.speed 
            this.imageCounter++
        }

        if(this.imageCounter > 9){
            this.imageCounter = 0
        }

        this.image.src = "images/ninja[" + this.imageCounter + "].png" 
    }
}
// Example usage
let player = new Player('hero', 50, 50, 50, 80, "images/ninja[0].png", 1, 1);

let zombieT = new GroundEntity('zombie', 0, 0, 80, 110, "images/zombie.png", 5, 1)
//zombieT.entityType

let blockT = new Block('box', 100, 100, 30, 30, "images/box.png")
//blockT.blockType
//Test 
function update() {
    player.move()
    player.fall()

    zombieT.fall()
}

function draw() {
    zombieT.draw()
    blockT.draw()
    player.draw()
}

function keyup(key) {
    console.log("Pressed", key);


}

function mouseup() {
    //console.log("Mouse clicked at", mouseX, mouseY);

}
