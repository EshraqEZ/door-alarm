radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        music.setVolume(0)
    }
    if (receivedNumber == 2) {
        music.setVolume(255)
    }
})
input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
})
basic.forever(function () {
    radio.setGroup(69)
    if (input.magneticForce(Dimension.Strength) < 195) {
        radio.sendNumber(1)
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
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
