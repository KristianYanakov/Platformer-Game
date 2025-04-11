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
