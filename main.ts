let a = game.askForNumber("Tell me your first number")
let b = game.askForNumber("tell me your second number")
let minval = b
if (a < b) {
    minval = a
}
game.splash("The minimum value is " + minval)
