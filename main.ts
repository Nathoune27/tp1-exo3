let posY = 0
let posX = 0
let X2 = 0
let Y2 = 0
basic.forever(function () {
    posY = 0
    posX = randint(0, 4)
    basic.pause(1000)
    led.plot(posX, posY)
    X2 = posX
    Y2 = posY
    while (Y2 <= 4) {
        led.unplot(X2, Y2)
        Y2 += 1
        led.plot(X2, Y2)
    }
})
