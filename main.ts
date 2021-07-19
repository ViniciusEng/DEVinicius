input.onButtonPressed(Button.A, function () {
    if (A0 > 2) {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("ESCOLHA ENTRE 1 E 3")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        A0 = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        A0 = A0 + 1
        basic.showString("" + (A0))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (BADV == A0 + RANDOMMAQPALITO) {
        basic.pause(200)
        basic.showString("PEDRO GANHOU")
        basic.showString("" + (A0 + RANDOMMAQPALITO))
        basic.pause(200)
        PALITOPEDRO = PALITOPEDRO - 1
        basic.showString("PEDRO TEM")
        basic.showString("" + (PALITOPEDRO))
        basic.showString("PALITOS")
    } else if (SOMAMAQ == A0 + RANDOMMAQPALITO) {
        basic.pause(200)
        basic.showString("PC GANHOU")
        basic.showString("" + (A0 + RANDOMMAQPALITO))
        basic.pause(200)
        basic.showString("APERTE RESET")
        PALITOMAQ = PALITOMAQ - 1
    } else {
        basic.pause(1000)
        basic.showString("SEM VENCENDOR!")
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    if (BADV > 5) {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("ESCOLHA ENTRE 1 E 6")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        BADV = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        BADV = BADV + 1
        basic.showString("" + (BADV))
    }
})
let SOMAMAQ = 0
let RANDOMMAQPALITO = 0
let BADV = 0
let PALITOMAQ = 0
let PALITOPEDRO = 0
let A0 = 0
A0 = 0
PALITOPEDRO = 3
PALITOMAQ = 3
basic.forever(function () {
    if ((PALITOPEDRO || PALITOMAQ) != 0) {
        RANDOMMAQPALITO = randint(1, 3)
        SOMAMAQ = randint(1, 6)
    } else if (PALITOPEDRO == 0) {
        basic.showString("PEDRO TEM 0 PALITOS")
        basic.showString("PEDRO VENCEU O PC")
    } else if (PALITOMAQ == 0) {
        basic.showString("PC TEM 0 PALITOS")
        basic.showString("PC VENCEU O PEDRO")
    }
})
