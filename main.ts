let mySprite = sprites.create(img`
    . . . a a . . . . . . a a . . . 
    . . . . a . . . . . . a . . . . 
    . . . . a a . . . . a a . . . . 
    . . . . . a a f f a a . . . . . 
    . . . . . . f c c f . . . . . . 
    . . . . . f c c c c f . . . . . 
    . . . . f c f c c f c f . . . . 
    . . . . f c c c c c c f . . . . 
    . . . . . f c f f c f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f c c f f . . . . . 
    . . . . . f c a a c f . . . . . 
    . . . . . f c a a c f . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f a f c c f a f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.gameOver(false)
