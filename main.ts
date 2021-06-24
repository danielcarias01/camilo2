let can_agua = 0
let Valor_dado = 0
let Promedio = 0
input.onButtonPressed(Button.A, function () {
    can_agua = 0
    for (let index = 0; index < 1825; index++) {
        Valor_dado = randint(1, 6)
        can_agua += Valor_dado
    }
    Promedio = can_agua / 1825
    basic.showNumber(Promedio)
})
