input.onButtonPressed(Button.A, function () {
    a += 1
})
input.onButtonPressed(Button.B, function () {
    b = 1
})
let b = 0
let a = 0
b = 0
basic.forever(function () {
    if (a == 3) {
        a = 1
    }
})
basic.forever(function () {
    if (a == 2) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        if (b == 1) {
            basic.pause(1000)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
            basic.pause(1000)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 64)
            basic.pause(400)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
            basic.pause(1000)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 64)
            basic.pause(400)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
            basic.pause(1000)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 64)
            basic.pause(400)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
            basic.pause(1000)
            Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
            b = 0
        }
    }
})
basic.forever(function () {
    if (a == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        if (b == 1) {
            basic.pause(1000)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 70)
            basic.pause(1000)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 73)
            basic.pause(400)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 76)
            basic.pause(1000)
            Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
            b = 0
        }
    }
})
