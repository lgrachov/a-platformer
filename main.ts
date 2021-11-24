scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
})
function Change_List_a (_7: number) {
    Bar = 9
    Bar = 9
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.setScore(1)
    music.baDing.play()
})
function Change_List_a2 (_7: number) {
    Bar = 7
    Bar = 7
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    controller.moveSprite(Player2, 100, 100)
    tiles.setTilemap(tilemap`level1`)
})
let Bar = 0
let Player2: Sprite = null
info.setScore(0)
tiles.setTilemap(tilemap`level1`)
Player2 = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.placeOnRandomTile(Player2, sprites.castle.saplingOak)
controller.moveSprite(Player2, 100, 100)
scene.cameraFollowSprite(Player2)
