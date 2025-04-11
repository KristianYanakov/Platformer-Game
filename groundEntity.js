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