let Y = 2
let X = 2
led.plot(X, Y)
basic.forever(function () {
    while (input.isGesture(Gesture.LogoUp) && Y < 4) {
        basic.clearScreen()
        Y += 1
        led.plot(X, Y)
        basic.pause(200)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.TiltRight) && X < 4) {
        basic.clearScreen()
        X += 1
        led.plot(X, Y)
        basic.pause(200)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.LogoDown) && Y > 0) {
        basic.clearScreen()
        Y += -1
        led.plot(X, Y)
        basic.pause(200)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.TiltLeft) && X > 0) {
        basic.clearScreen()
        X += -1
        led.plot(X, Y)
        basic.pause(200)
    }
})
