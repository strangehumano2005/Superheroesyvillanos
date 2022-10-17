// Determinar posiciones de personajes
// 
let Spiderman = game.createSprite(0, 2)
let Maléfica = game.createSprite(randint(1, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        Spiderman.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        Spiderman.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        Spiderman.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        Spiderman.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (Spiderman.isTouching(Maléfica)) {
        Spiderman.delete()
        Maléfica.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        game.gameOver()
    }
})
