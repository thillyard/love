input.onGesture(Gesture.Shake, function () {
    while (!(input.logoIsPressed())) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.clearScreen()
})
