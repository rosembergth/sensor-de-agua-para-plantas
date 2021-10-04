let lectura = 0
led.setBrightness(200)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    lectura = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P0, 0)
    led.plotBarGraph(
    lectura,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (lectura))
    }
    basic.pause(5000)
})
