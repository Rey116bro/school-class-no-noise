let stop = 0
music.setVolume(255)
basic.forever(function () {
    if (input.soundLevel() > 500 && (stop == 0 || input.buttonIsPressed(Button.AB))) {
        music.playMelody("E B C5 A B G A F ", 280)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        stop = 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        stop = 0
    }
})
