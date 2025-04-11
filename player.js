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