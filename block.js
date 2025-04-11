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
