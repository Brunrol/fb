radio.onReceivedNumber(function (receivedNumber) {
    Speed = receivedNumber
    if (Speed == 0) {
        Links = 0
        Rechts = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Speed == 1) {
        basic.showArrow(ArrowNames.North)
        if (Links < 239) {
            Links = Links + 17
        }
        if (Rechts < 239) {
            Rechts = Rechts + 17
        }
    } else if (Speed == 2) {
        if (Links > 16) {
            Links = Links - 17
        }
        if (Rechts > 16) {
            Rechts = Rechts - 17
        }
        basic.showArrow(ArrowNames.South)
    } else if (Speed == 3) {
        basic.showArrow(ArrowNames.East)
        if (Links < 239) {
            Links = Links + 17
        }
        if (Rechts > 16) {
            Rechts = Rechts - 17
        }
    } else if (Speed == 4) {
        basic.showArrow(ArrowNames.West)
        if (Links > 16) {
            Links = Links - 17
        }
        if (Rechts < 239) {
            Rechts = Rechts + 17
        }
    } else if (Speed == 5) {
        RW = 0
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . . . . .
            `)
    } else if (Speed == 6) {
        RW = 1
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
})
let Speed = 0
let RW = 0
let Links = 0
let Rechts = 0
radio.setGroup(1)
maqueen.motorStopAll()
Rechts = 0
Links = 0
RW = 0
basic.showLeds(`
    # # . # #
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
Speed = 0
basic.forever(function () {
    if (RW == 0) {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, Links)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, Rechts)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, Links)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, Rechts)
    }
})
