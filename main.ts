/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Sep 2025
 * This program displays an LED
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // turns on LED
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
    // turns off LED
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
