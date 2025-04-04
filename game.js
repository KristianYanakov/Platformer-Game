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

    fall(blocks) { // Accept blocks as a parameter
        if (!this.isOnGround(blocks)) {  // Pass blocks array to isOnGround()
            this.y += this.weight; 
            this.weight = Math.min(this.weight + 0.3, 6); // Apply gravity but cap speed
        } else {
            this.weight = 0; // Stop falling when on ground
        }
    }

    isOnGround(blocks) {
        for (let block of blocks) {
            if (
                this.x < block.x + block.sx && // Right side of entity is not past the left side of block
                this.x + this.sx > block.x && // Left side of entity is not past the right side of block
                this.y + this.sy >= block.y && // Bottom of entity is at or below the top of block
                this.y + this.sy - this.weight < block.y // Entity was above the block in the previous frame
            ) {
                this.y = block.y - this.sy; // Snap entity to block's top
                return true; // Collision detected
            }
        }
        return false; // No collision
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

        this.animationFrame = 0; // Frame counter for slowing animation
        this.animationSpeed = 5; // Change image every 5 frames
    }

    move() {
        let moving = false; // Track if player is moving
        //A
        if(isKeyPressed[65]){
            this.x -= this.speed
            moving = true;
        }
        //D
        if(isKeyPressed[68]){
            this.x += this.speed 
            moving = true;
        }

        // Only update animation when moving
        if (moving) {
            this.animationFrame++; // Increase frame counter

            if (this.animationFrame >= this.animationSpeed) {
                this.imageCounter++; // Change image
                this.animationFrame = 0; // Reset frame counter
            }

            if (this.imageCounter > 9) {
                this.imageCounter = 0; // Loop back to first image
            }

            this.image.src = "images/ninja[" + this.imageCounter + "].png";
        }
        
    }
}
// Example usage
let player = new Player('hero', 50, 50, 50, 80, "images/ninja[0].png", 1, 10);

let zombieT = new GroundEntity('zombie', 0, 0, 80, 110, "images/zombie.png", 5, 1)
//zombieT.entityType

//let blockT = new Block('box', 100, 100, 30, 30, "images/box.png")
//blockT.blockType

let blocks = []
for(let i = 0; i < 10; i ++){
    blocks.push(new Block('box', i * 50, 500, 50, 50, 'images/box.png'))
}
function update() {
    player.move()

    player.fall(blocks)

    zombieT.fall(blocks)
}

function draw() {
    zombieT.draw()
    player.draw()

    for(let i = 0; i < 10; i ++){
        blocks[i].draw()
    }
}

function keyup(key) {
    console.log("Pressed", key);

}

function mouseup() {
    //console.log("Mouse clicked at", mouseX, mouseY);

}
