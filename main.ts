controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(80, -80)
    mySprite.setImage(img`
        . . . 5 5 . 
        . 5 5 8 6 5 
        5 9 4 8 8 5 
        . 5 4 4 5 . 
        . . 5 9 5 . 
        . . . 5 . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(80, 80)
    mySprite.setImage(img`
        . . . 5 . . 
        . . 5 9 5 . 
        . 5 4 4 5 . 
        5 9 4 8 8 5 
        . 5 5 8 6 5 
        . . . 5 5 . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level2`))
mySprite = sprites.create(img`
    . . . 5 5 . 
    . 5 5 8 6 5 
    5 9 4 8 8 5 
    . 5 4 4 5 . 
    . . 5 9 5 . 
    . . . 5 . . 
    `, SpriteKind.Player)
mySprite.setVelocity(80, -80)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
scene.cameraFollowSprite(mySprite)
