radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # # . . .
        # # # # .
        # # . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # . . .
        # # # # .
        # # . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # . . .
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . # #
        # . . # #
        # . . # #
        # . . # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showString("OBRIGADO!")
})
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(50)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(100)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . .
        . # . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . .
        . # . # .
        # . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . .
        . # . # .
        # . # . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . # . .
            . # . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # . .
            # # . # .
            # . # . #
            . # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # . #
            # # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . #
            # # . # .
            # . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # . . #
                . . # # .
                . . # # .
                . # . . #
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . # .
                . # # . .
                . # # . .
                # . . # .
                . . . . #
                `)
        }
    }
    for (let index = 0; index < 1; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            . . . . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . . . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . # . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . # . .
            . # . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # . .
            # # . # .
            # . # . #
            . # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # . #
            # # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . #
            # # . # .
            # . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . #
            `)
    }
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . .
        . # . # .
        . . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . .
        . # . # .
        # . . . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . .
        . # . # .
        # . # . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . # . .
            . # . # .
            . . . . #
            `)
        basic.showLeds(`
            # . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # . .
            # # . # .
            # . # . #
            . # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # . #
            # # . # .
            . . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . #
            # # . # .
            # . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # . . #
                . . # # .
                . . # # .
                . # . . #
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . # .
                . # # . .
                . # # . .
                # . . # .
                . . . . #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(5100)
})
radio.setGroup(0)
