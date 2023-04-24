input.onButtonPressed(Button.A, function () {
    music.setVolume(0)
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
