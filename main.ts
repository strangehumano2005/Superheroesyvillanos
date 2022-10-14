// Determinar posiciones de personajes
// 
let CLARK_KENT = game.createSprite(0, 2)
let LEX_LUTHOR = game.createSprite(randint(1, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        CLARK_KENT.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        CLARK_KENT.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        CLARK_KENT.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        CLARK_KENT.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (CLARK_KENT.isTouching(LEX_LUTHOR)) {
        CLARK_KENT.delete()
        LEX_LUTHOR.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
        music.playMelody("C D E F G A B C5 ", 120)
        game.gameOver()
    }
})
