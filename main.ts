controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MainSprite.startEffect(effects.clouds, randint(100, 600))
})
let MainSprite: Sprite = null
scene.setBackgroundColor(3)
game.splash("Hello this is the makecode tutorial!")
game.splash("I am going to do follow the instructions now!")
MainSprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c d d c c c c f . 
    . f f c c d d d d c c f f . 
    . f f f b f d d f b f f f . 
    . f f 5 1 f d d f 1 5 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 5 5 5 5 e f e . . 
    . e 5 f b 3 3 3 3 b f 5 e . 
    . d d f 3 3 3 3 3 3 c d d . 
    . d d f c c c c c c f d d . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
