input.onButtonPressed(Button.A, function () {
    a += 1
    basic.showNumber(a)
})
input.onGesture(Gesture.TiltLeft, function () {
    b += -1
    basic.showNumber(b)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(b)
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    b += 1
    basic.showNumber(b)
})
input.onGesture(Gesture.TiltRight, function () {
    a += -1
    basic.showNumber(a)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(a)
    basic.showNumber(b)
})
let b = 0
let a = 0
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
